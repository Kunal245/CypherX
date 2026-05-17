


import { db } from "@workspace/db/client";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactions } from "../../../components/OnRampTransaction";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

async function getBalance() {
  const session = await getServerSession(authOptions);


  //********BUG******
  //even afterr clicking logout it tries to fetch balance from db which,
  //became undefined after logout
  //so we need to add this logic to redirect the user to the signin page if the session is expired 
  if(!session?.user?.id) {
    redirect("api/auth/signin")
  }
  //FIXED

    // console.log(session);
    // console.log("debugginggg");

  const balance = await db.balance.findFirst({
    where: { userId: Number(session?.user?.id) },
    //Number(session?.user?.id)- this means if(session) get(user) & if(user) get(id)
    //why "?": this means if session= null it crashes but if used "?" it gives undefined
    //And wwhen done Number(undefined) give "NaN" which prisma rejects and not crash 
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await db.onRampTransaction.findMany({
    where: { userId: Number(session?.user?.id) },
  });
  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

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