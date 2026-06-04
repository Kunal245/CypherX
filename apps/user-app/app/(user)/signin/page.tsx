"use client"


import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
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

    return <div>
        signin

        <Input placeholder="number" onChange={(e) => {
            setNumber(e.target.value)
        }} ></Input>
        <Input placeholder="password" onChange={(e) => {
            setPassword(e.target.value)
        }} ></Input>
        <Button onClick={handleSignIn}>
          Sign In
        </Button>
    </div>
}