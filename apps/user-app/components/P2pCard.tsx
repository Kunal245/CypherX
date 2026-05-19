import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { useState } from "react";



export function P2pCard() {

    const [number, setNumber] = useState("")
    const [amount, setAmount] = useState("")


    return <div>
        <Card className="h-fit">
            <CardHeader>
                <CardTitle>Send</CardTitle>
            </CardHeader>
            <CardContent>
                <div>
                    <Label>Number</Label>
                    <Input></Input>
                </div>
                <div>
                    <Label>Amount</Label>
                    <Input></Input>
                </div>
                <Button>Send</Button>
            </CardContent>
        </Card>
    </div>
}