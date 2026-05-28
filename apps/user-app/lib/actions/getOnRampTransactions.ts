"use server"


import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { db } from "@workspace/db/client";



export async function getOnRampTransactions() {
  const session = await getServerSession(authOptions)
  const txns = await db.onRampTransaction.findMany({
    where: { userId: Number(session?.user?.id) },
  });
  return txns.map((t: any) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}