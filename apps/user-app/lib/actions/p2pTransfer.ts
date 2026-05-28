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

    const receiver = await db.user.findFirst({
        where: {
            number: to
        }
    })

    if(!receiver) {
        return {
            msg: "User does not exist"
        }
    }

    console.log(sender)
    console.log(receiver.id) 
    // FIXED 

    await db.$transaction(async(txn) => {

        //#1 issue: 
        
        // add locking query for multiple requests bypassing balance check
            await txn.$queryRaw`SELECT * FROM "Balance" WHERE "userId"= ${Number(sender)} FOR UPDATE`

        const senderBalance = await txn.balance.findUnique({
            where: {
                userId: Number(sender)
            }
        })
            // console.log("before delay") //FIXED
            // delay fn
            // console.log("after delay")

        console.log(senderBalance?.amount + "err")

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
                userId: receiver.id
            },
            data: {
                amount: {
                    increment: amount
                }
            }
        })

        await txn.p2pTransactions.create({
            data: {
                senderId: Number(sender),
                receiverId: receiver.id,
                amount: amount,
                timestamp: new Date()
            }
        })
    })
}