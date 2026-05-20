"use server"



import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { db } from "@workspace/db/client";



export async function getP2pTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await db.p2pTransactions.findMany({
    where: { senderId: Number(session?.user?.id) },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
    sender: t.senderId,
    receiver: t.receiverId,
  }));
}