


import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";

type Transaction = {
  time: Date;
  amount: number;
  status: "Success" | "Failure" | "Processing";
  provider: string;
};

export const OnRampTransactions = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>

        {/* Checks transactions lenght if zero than shows msg ow executes the mapping logic */}
        {!transactions.length ? (
          <div className="text-center text-muted-foreground py-8">
            No recent transactions
          </div>
        ) : (
          <div className="space-y-4">

            {/* imp logic to map the transactions  */}
            {transactions.map((t, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="space-y-1">
                  <div className="text-sm font-medium">Received INR</div>
                  <div className="text-xs text-muted-foreground">{t.time.toDateString()}</div>
                  <Badge
                    variant={
                      t.status === "Success"
                        ? "default"
                        : t.status === "Failure"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {t.status}
                  </Badge>
                </div>
                <div className="text-sm font-semibold text-green-600">
                  + ₹{t.amount / 100}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// *******************OLDER DESIGN DRAFTS*****************************
// import { Card } from "@repo/ui/card"

// export const OnRampTransactions = ({
//     transactions
// }: {
//     transactions: {
//         time: Date,
//         amount: number,
//         // TODO: Can the type of `status` be more specific?
//         status: string,
//         provider: string
//     }[]
// }) => {
//     if (!transactions.length) {
//         return <Card title="Recent Transactions">
//             <div className="text-center pb-8 pt-8">
//                 No Recent transactions
//             </div>
//         </Card>
//     }
//     return <Card title="Recent Transactions">
//         <div className="pt-2">
//             {transactions.map(t => <div className="flex justify-between">
//                 <div>
//                     <div className="text-sm">
//                         Received INR
//                     </div>
//                     <div className="text-slate-600 text-xs">
//                         {t.time.toDateString()}
//                     </div>
//                 </div>
//                 <div className="flex flex-col justify-center">
//                     + Rs {t.amount / 100}
//                 </div>

//             </div>)}
//         </div>
//     </Card>
// }