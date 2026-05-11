import { NextResponse } from "next/server"
import { PrismaClient } from "@workspace/db/client";



const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "rohit@gmail.com",
            name: "rohit"
        }
    })

    return NextResponse.json({
        msg: "hi there"
    })
}