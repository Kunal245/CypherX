"use server"



import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { db } from "@workspace/db/client";
import { redirect } from "next/navigation";



export async function getP2pTransactions() {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id

  if(!session?.user?.id) {
      redirect("api/auth/signin")
  } //FIXED: session expire error

  const txns = await db.p2pTransactions.findMany({
    where: {
      OR: [
        { senderId: Number(session?.user?.id) },
        { receiverId: Number(session?.user?.id) }
      ]
    },
  });
  return txns.map((t) => ({
    userId: userId,
    time: t.timestamp,
    amount: t.amount,
    sender: t.senderId,
    receiver: t.receiverId,
  }));
}