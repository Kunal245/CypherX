"use server"



import { db } from "@workspace/db/client";



export default async function signInCheck(number: any) {
    const existingUser = await db.user.findFirst({
        where: {
            number: number
        }
    })

    return existingUser
}