"use client"


import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"




export default function Signin() {

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    //*****************THIS IS THE FUNC WHICH PASSES THE VALUES TO NEXT CredentialProvider**********************/
    const handleSignIn = async (e: React.SyntheticEvent) => {
      e.preventDefault();

      // console.log('Email: ', email);
      const response = await signIn('credentials', {
        redirect: false,
        number,
        password,
      })
      router.replace('/dashboard');
        // .then(() => {
        //   // console.log(response);
        //   router.replace('/dashboard');
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
    };
    //**********************************************************************************************************/

    return <div className="flex justify-center items-center min-h-96">

        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="flex">
                  <div>Welcome to CypherX</div>
                  <div className="text-primary px-1">pay</div>
                </CardTitle>
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
                    <Input type="password" placeholder="Enter Password" onChange={(e) => {
                        setPassword(e.target.value)
                    }} ></Input>
                </div>
                <Button className="w-full" onClick={handleSignIn}>Sign In</Button>
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