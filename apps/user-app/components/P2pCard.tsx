"use client"


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
                    <Input placeholder="Enter Number" onChange={(e) => {
                        setNumber(e.target.value)
                    }} ></Input>
                </div>
                <div>
                    <Label>Amount</Label>
                    <Input placeholder="Enter Amount" onChange={(e) => {
                        setAmount(e.target.value)
                    }} ></Input>
                </div>
                <Button onClick={() => {

                }}>Send</Button>
            </CardContent>
        </Card>
    </div>
}