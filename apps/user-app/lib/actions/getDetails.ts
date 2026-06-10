"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { redirect } from "next/navigation";
import { db } from "@workspace/db/client";





export async function getDetails() {
  const session = await getServerSession(authOptions);


  //********BUG******
    //even afterr clicking logout it tries to fetch balance from db which,
    //became undefined after logout
    //so we need to add this logic to redirect the user to the signin page if the session is expired 
  if(!session?.user?.id) {
    redirect("api/auth/signin")
  }
  //FIXED

    // console.log(session);
    // console.log("debugginggg");

  const user = await db.user.findFirst({
    where: { id: Number(session?.user?.id) },
    //Number(session?.user?.id)- this means if(session) get(user) & if(user) get(id)
    //why "?": this means if session= null it crashes but if used "?" it gives undefined
    //And wwhen done Number(undefined) give "NaN" which prisma rejects and not crash 
  });
  return {
    amount: user?.email || 0,
    name: user?.name || 0,
    number: user?.number || 0,
  };
}