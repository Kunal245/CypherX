

import express from "express"
import { db } from "@workspace/db/client"

const app = express();
app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
    //ps1- add zod validation (fuck it)
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }
    
    // console.log(typeof req.body.token)
    // console.log(typeof req.body.user_identifier)
    // console.log(typeof req.body.amount)

    
    
    
    //ps2- adding Transactions- prevents partial code execution
    try{
        await db.$transaction([
            db.balance.update({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount) //FIXED
                    }
                }
            }),
            db.onRampTransaction.update({
                where: {
                    token: String(paymentInformation.token) //FIXED
                },
                data: {
                    status: "Success"
                }
            })
        ])
        
        // console.log(balance)
        
        res.status(200).json({
            message: "captured"
        })
    } catch(e) {
        console.log(e)
        res.status(411).json({
            msg: "web-hook processing error"
        })
    }
})

app.listen(3003)




//BUG- BALANCE GETS UPDATED IF OLDER TOKEN PASSED BUT STATUS OF NEW REMAINS SAME OFC
//EXPLANATION- This is the failure of bank webhook not my application they should send status update on right token
//FIX- For safe txn the server should only approve for processing txn 
//BUT- Then miscoordination happen the bank statement says payment approved and our server says decline