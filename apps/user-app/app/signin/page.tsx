"use client"


import { Input } from "@workspace/ui/components/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react"




export default async function Signin() {

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    await signIn('credentials', {
      redirect: false,
      number,
      password,
    })
      .then((response:any) => {
        console.log(response);
        router.replace('/dashboard');
      })
      .catch((error:any) => {
        console.log(error);
      });

    return <div>
        signin

        <Input placeholder="number" onChange={(e) => {
            setNumber(e.target.value)
        }} ></Input>
        <Input placeholder="password" onChange={(e) => {
            setPassword(e.target.value)
        }} ></Input>
    </div>
}