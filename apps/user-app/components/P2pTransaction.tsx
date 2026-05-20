import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";




type Transaction = {
  time: Date;
  amount: number;
  sender: number;
  receiver: string;
};


export const P2pTransaction = ({transactions} : {transactions : Transaction[]}) => {
    return (
        <Card>
            <CardHeader>Recent Transactions</CardHeader>
            <CardContent>

                {!transactions ? (<div>No Recent Transaction</div>)}
            </CardContent>
        </Card>
    )
}