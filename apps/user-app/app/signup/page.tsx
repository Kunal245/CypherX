



"use client"


import signInCheck from "@/lib/actions/signInCheck";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"




export default function Signup() {

    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    // console.log("NUMBERRRR: " + number);

    //*****************THIS IS THE FUNC WHICH PASSES THE VALUES TO NEXT CredentialProvider**********************/
    const handleSignIn = async (e: React.SyntheticEvent) => {

        const check = await signInCheck(number)

        if(check){
            alert("User exist please SignIn")
            router.push("/signin")
        } else {
            e.preventDefault();
            
            // console.log("NUMBERRRR: " + number);
        //   console.log('NUMBER: ', number);
          const response = await signIn('credentials', {
            redirect: false,
            name,
            email,
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
                    <Label>Name</Label>
                    <Input placeholder="Enter Full Name" onChange={(e) => {
                        setName(e.target.value)
                    }} ></Input>
                </div>
                <div className="space-y-2" >
                    <Label>Email</Label>
                    <Input placeholder="Enter Email" onChange={(e) => {
                        setEmail(e.target.value)
                    }} ></Input>
                </div>
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
                }}>Sign Up</Button>
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