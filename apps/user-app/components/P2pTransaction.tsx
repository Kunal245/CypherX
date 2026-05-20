import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";




type Transaction = {
  time: Date;
  amount: number;
  sender: number;
  receiver: number;
};


export const P2pTransaction = ({transactions} : {transactions : Transaction[]}) => {
    return (
        <Card>
            <CardHeader>Recent Transactions</CardHeader>
            <CardContent>

                {!transactions ? (<div>No Recent Transaction</div>) : (
                    <div>
                        {transactions.map((t,i) => {
                            return <div key={i}>
                                <div>
                                    <div>Recieaved INR</div>
                                    <div>{t.time.toDateString()}</div>
                                    <Badge>{t.receiver}</Badge>
                                </div>


                                <div>

                                </div>
                            </div>
                        })}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}