import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent, CardHeader } from "@workspace/ui/components/card";




type Transaction = {
    userId: number
    time: Date
    amount: number
    sender: number
    receiver: number
};


export const P2pTransaction = ({transactions} : {transactions : Transaction[]}) => {
    return (
        <Card>
            <CardHeader>Recent Transactions</CardHeader>
            <CardContent>

                {!transactions ? (<div className="text-center text-muted-foreground py-8" >No Recent Transaction</div>) : (
                    <div className="space-y-4" >
                        {transactions.map((t,i) => {

                            console.log(t.sender)
                            console.log(t.userId)

                            if(t.userId == t.sender) {
                                return <div key={i} className="flex justify-between items-center" >
                                    <div className="space-y-1" >
                                        <div className="text-sm font-medium" >Sent INR</div>
                                        <div className="text-xs text-muted-foreground" >{t.time.toDateString()}</div>
                                        <Badge>To: {t.receiver}</Badge>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-red-600" >
                                            - ₹{t.amount / 100}
                                        </div>
                                    </div>
                                </div>

                            } else if(t.userId == t.receiver) {

                                return <div key={i} className="flex justify-between items-center" >
                                    <div className="space-y-1" >
                                        <div className="text-sm font-medium" >Received INR</div>
                                        <div className="text-xs text-muted-foreground" >{t.time.toDateString()}</div>
                                        <Badge>From: {t.receiver}</Badge>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-green-600" >
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