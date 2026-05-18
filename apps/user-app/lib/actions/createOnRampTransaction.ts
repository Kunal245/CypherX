
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { redirect } from "next/navigation";
import { db } from "@workspace/db/client";



//ps- creating function to put data in db when server call happenn on button click
//we don't use axios call as this is monorepo which gives ability to directly fetch data from db at server-side
//TRANSFER PAGE- ADD MONEY
//ON-BUTTON CLICK

export async function createOnRampTransaction(amount: number, provider: string) {
    //onClick i/p- user sends amount and bank provider 
    // **don't send userId rather extract it from NextAuth- cause security risk**

    const session = await getServerSession(authOptions)
    const userId = session?.user?.id
    const token = Math.random().toString()

    if(!userId) {
        redirect("api/auth/signin")
    }

    //if user exist store txn data
    await db.onRampTransaction.create({
        data: {
            userId,
            amount: amount,
            status: "Processing",
            startTime: new Date(),
            provider: provider,
            token: token
        }
    })

    return {
        msg: "On Ramp Transaction added"
    }

    
}
