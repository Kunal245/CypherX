"use client"


import { Input } from "@workspace/ui/components/input";
import { useState } from "react"




export default async function Signin() {

    const [number, setNumber] = useState("");
    const [password, setPassword] = useState();

    return <div>
        signin

        <Input placeholder="number" onChange={(e) => {
            setNumber(e.target.value)
        }} ></Input>
    </div>
}