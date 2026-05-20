


import { getBalance } from "@/lib/actions/getBalance";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransaction";
import { getOnRampTransactions } from "@/lib/actions/getOnRampTransaactions";


export default async function TransferPage() {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();
  
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Transfer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AddMoney />
        <div className="space-y-6">
          <BalanceCard amount={balance.amount} locked={balance.locked} />
          <OnRampTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
}