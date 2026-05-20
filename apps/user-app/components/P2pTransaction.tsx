import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";




type Transaction = {
    userId: number
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

                            if(t.userId == t.sender) {
                                return <div key={i} className="flex justify-between items-center" >
                                    <div>
                                        <div>Sent INR</div>
                                        <div>{t.time.toDateString()}</div>
                                        <Badge>To: {t.receiver}</Badge>
                                    </div>
                                    <div>
                                        <div className="text-red-600" >
                                            - ₹{t.amount / 100}
                                        </div>
                                    </div>
                                </div>

                            } else {

                                return <div key={i}>
                                    <div>
                                        <div>Received INR</div>
                                        <div>{t.time.toDateString()}</div>
                                        <Badge>From: {t.sender}</Badge>
                                    </div>
                                    <div>
                                        <div className="text-green-600" >
                                            + ₹{t.amount / 100}
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}