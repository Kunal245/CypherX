"use client"


import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { useState } from "react";



export function P2pCard() {

    const [number, setNumber] = useState("")
    const [amount, setAmount] = useState("")


    return <div className="flex justify-center items-center min-h-96">
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Send</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Number</Label>
                    <Input placeholder="Enter Number" onChange={(e) => {
                        setNumber(e.target.value)
                    }} ></Input>
                </div>
                <div className="space-y-2">
                    <Label>Amount</Label>
                    <Input placeholder="Enter Amount" onChange={(e) => {
                        setAmount(e.target.value)
                    }} ></Input>
                </div>
                <Button className="w-full" onClick={() => {

                }}>Send</Button>
            </CardContent>
        </Card>
    </div>
}