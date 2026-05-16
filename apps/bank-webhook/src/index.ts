

import express from "express"
import { db } from "@workspace/db/client"

const app = express();

app.post("/hdfcWebhook", async (req, res) => {
    //ps1- add zod validation (fuck it)
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }
    
    
    
    //ps2- adding Transactions- prevents partial code execution
    try{
        await db.$transaction([
            db.balance.update({
                where: {
                    userId: paymentInformation.userId
                },
                data: {
                    amount: {
                        increment: paymentInformation.amount
                    }
                }
            }),
            db.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ])
        
        res.status(200).json({
            message: "captured"
        })
    } catch(e) {
        res.status(411).json({
            msg: "web-hook processing error"
        })
    }
})

app.listen(3003)