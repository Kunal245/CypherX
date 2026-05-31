


import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Wallet } from "lucide-react";

export const HomeBalanceCard = ({ amount, locked }: { amount: number; locked: number }) => {
  return (
    <Card className="w-full max-w-full bg-primary/60 bg-gradient-to-br from-secondary/20 via-primary/50 to-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Your Balance
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between py-2">
          <span className="text-3xl font-bold tracking-tight">
            ₹ {(locked + amount) / 100} INR
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between py-2">
          <span className="text-3xl font-bold tracking-tight">
            <Button variant="secondary" className="bg-primary/90 border-primary">Send</Button>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};