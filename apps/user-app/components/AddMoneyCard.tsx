


"use client";
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
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Money</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Amount</Label>
          
          {/* changes the state variable amount */}
          <Input placeholder="Enter amount" onChange={() => {}} />
        </div>

        <div className="space-y-2">
          <Label>Bank</Label>
          <Select
            //this one is the default value which appears in dropdown
            defaultValue={SUPPORTED_BANKS[0]?.name}

            //**********main logic of this component****:
            //Whenever the user clicks on any bank from list
            //the state comp changes redirect url 
            onValueChange={(value) =>
              setRedirectUrl(
                SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a bank" />
            </SelectTrigger>
            <SelectContent>
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
          onClick={() => {
            window.location.href = redirectUrl || "";
          }}
        >
          Add Money
        </Button>
      </CardContent>
    </Card>
  );
};