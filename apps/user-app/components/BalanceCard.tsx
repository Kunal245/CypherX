



import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BalanceCard = ({ amount, locked }: { amount: number; locked: number }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between py-2 border-b">
          <span className="text-muted-foreground">Unlocked Balance</span>
          <span className="font-medium">{amount / 100} INR</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="text-muted-foreground">Total Locked Balance</span>
          <span className="font-medium">{locked / 100} INR</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Total Balance</span>
          <span className="font-medium">{(locked + amount) / 100} INR</span>
        </div>
      </CardContent>
    </Card>
  );
};