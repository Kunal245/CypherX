


import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Wallet } from "lucide-react";

export const HomeBalanceCard = ({ amount, locked }: { amount: number; locked: number }) => {
  return (
    <Card className="bg-primary w-full max-w-sm">
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
    </Card>
  );
};