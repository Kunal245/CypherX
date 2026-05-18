


"use client";
import { createOnRampTransaction } from "@/lib/actions/createOnRampTransaction";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select";
import { useState } from "react";


const SUPPORTED_BANKS = [
  { name: "HDFC Bank", redirectUrl: "https://netbanking.hdfcbank.com" },
  { name: "Axis Bank", redirectUrl: "https://www.axisbank.com/" },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl)
  const [amount, setAmount] = useState(0)
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "")

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Add Money</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Amount</Label>
          
          {/* changes the state variable amount */}
          <Input className="text-base" placeholder="Enter amount" onChange={(e) => {
            setAmount(Number(e.target.value)) //convert to number //FIXED
          }} />
        </div>

        <div className="space-y-2">
          <Label>Bank</Label>
          <Select
            //this one is the default value which appears in dropdown
            defaultValue={SUPPORTED_BANKS[0]?.name}

            //**********main logic of this component****:
            //Whenever the user clicks on any bank from list
            //the state comp changes redirect url 
            onValueChange={(value) => {
              setRedirectUrl( SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || "" )
              //pass provider also
              setProvider( SUPPORTED_BANKS.find((x) => x.name === value)?.name || "" ) //FIXED
            }}
          >
            <SelectTrigger >
              <SelectValue placeholder="Select a bank" />
            </SelectTrigger>
            <SelectContent className="py-1 px-1">
              {SUPPORTED_BANKS.map((bank) => (
                <SelectItem key={bank.name} value={bank.name}>
                  {bank.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full"
          onClick={async () => {
            await createOnRampTransaction(amount*100, provider)
            window.location.href = redirectUrl || "";
          }}
        >
          Add Money
        </Button>
      </CardContent>
    </Card>
  );
};