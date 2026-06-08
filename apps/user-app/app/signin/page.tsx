"use client"


import signInCheck from "@/lib/actions/signInCheck";
import { Button } from "@workspace/ui/components/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"




export default function Signin() {

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    // console.log("NUMBERRRR: " + number);

    //*****************THIS IS THE FUNC WHICH PASSES THE VALUES TO NEXT CredentialProvider**********************/
    const handleSignIn = async (e: React.SyntheticEvent) => {

        const check = await signInCheck(number)

        if(!check){
            alert("No user found please SignUp")
            router.push("/signup")
        } else {
            e.preventDefault();
            
            // console.log("NUMBERRRR: " + number);
        //   console.log('NUMBER: ', number);
          const response = await signIn('credentials', {
            redirect: false,
            number,
            password,
          })
          router.replace('/dashboard');
        }

        // .then(() => {
        //   // console.log(response);
        //   router.replace('/dashboard');
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
    };
    //**********************************************************************************************************/

    return <div className="flex justify-center items-center min-h-screen">

        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="flex">
                  <div>Welcome to CypherX</div>
                  <div className="text-primary px-1">pay</div>
                </CardTitle>
                <CardAction>
                    <Button className="text-white/60" variant="link" onClick={(e) => {
                        router.push("/signup")
                    }} >Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent className="space-y-4" >
                <div className="space-y-2" >
                    <Label>Number</Label>
                    <Input placeholder="Enter Number" onChange={(e) => {
                        setNumber(e.target.value)
                    }} ></Input>
                </div>
                <div className="space-y-2" >
                    <Label>Password</Label>
                    <Input value={password} type="password" placeholder="Enter Password" onChange={(e) => {
                        console.log(e.target.value)
                        setPassword(e.target.value)
                    }} ></Input>
                </div>
                <Button className="w-full" onClick={(e) => {
                    // console.log(number)
                    handleSignIn(e)
                }}>Sign In</Button>
            </CardContent>
        </Card>

    </div>
}




//*************************OLDER DRAFT**************************/

{/* <Input placeholder="number" onChange={(e) => {
    setNumber(e.target.value)
}} ></Input>
<Input placeholder="password" onChange={(e) => {
    setPassword(e.target.value)
}} ></Input>
<Button onClick={handleSignIn}>
  Sign In
</Button> */}