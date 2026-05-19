"use server"



import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { db } from "@workspace/db/client";



export async function p2pTransfer(to: string, amount: number) {
    const session = await getServerSession(authOptions)
    const sender = session?.user?.id

    if(!sender) {
        return {
            msg: "Error while sending"
        }
    }

    const recieaver = await db.user.findFirst({
        where: {
            number: to
        }
    })

    if(!recieaver) {
        return {
            msg: "User does not exist"
        }
    }

    // console.log(sender)
    // console.log(recieaver.id) 
    // FIXED 
    await db.$transaction(async(txn) => {

        //#1 issue: 
        // add locking for multiple requests bypassing balance check
         await txn.$queryRaw`SELECT * FROM "Balance" WHERE "userId"= ${Number(sender)} FOR UPDATE`

        const senderBalance = await txn.balance.findUnique({
            where: {
                userId: Number(recieaver.id)
            }
        })
            // console.log("before delay") //FIXED
            // delay fn
            // console.log("after delay")

        // console.log(senderBalance)

        if (!senderBalance || senderBalance.amount < amount) {
            throw new Error("Insufficient Funds")
        }

        await txn.balance.update({
            where: {
                userId: Number(sender)
            },
            data: {
                amount: {
                    decrement: amount
                }
            }
        })

        await txn.balance.update({
            where: {
                userId: recieaver.id
            },
            data: {
                amount: {
                    increment: amount
                }
            }
        })
    })
}