"use client"


import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Wallet } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
// import { useRouter } from "next/navigation";

export const HomeBalanceCard = ({ amount, locked }: { amount: number; locked: number }) => {

  // const router = useRouter()
  const [hideBalance, setHideBalance] = useState(true)

  return (
    <Card className="w-full max-w-full bg-primary/60 bg-gradient-to-br from-secondary/20 via-primary/20 to-secondary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Your Balance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button onClick={() => {setHideBalance(!hideBalance)}} >click</Button>
        <div className="flex justify-between py-2">
          <span className="text-3xl font-bold tracking-tight">{hideBalance ? "🙊" : `₹ ${(locked + amount) / 100} INR`}</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between py-2">
          <Link href="/p2pTransaction">
            <span className="text-3xl font-bold tracking-tight">
              <Button variant="outline" className="">Send</Button>
            </span>
          </Link>
          <Link href="/transfer">
            <span className="px-2 text-3xl font-bold tracking-tight">
              <Button variant="outline" className="">Add Money</Button>
            </span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};