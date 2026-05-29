



import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";


export const HomeBalanceCard = ({ amount, locked }: { amount: number; locked: number }) => {
  return (
    <Card className="bg-primary">
      <CardHeader>
        <CardTitle>Your Balance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex justify-between py-2">
          <span className="text-muted-foreground">Total Balance</span>
          <span className="font-medium">{(locked + amount) / 100} INR</span>
        </div>
      </CardContent>
    </Card>
  );
};