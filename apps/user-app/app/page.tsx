// import { Button } from "@workspace/ui/components/button"
// import { PrismaClient } from "@workspace/db/client"
// import { useBalance } from "@workspace/store/useBalance";
// import { Appbar } from "@/components/Appbar";
// const client = new PrismaClient();

// export default function Page() {

//   const balance = useBalance();

//   return <div>
//     <Appbar></Appbar>
//   </div>
// }


"use client"
import { Appbar } from "@/components/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { JSX } from "react";

export default function Page(): JSX.Element {
  const session = useSession();
  return (
   <div>
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
   </div>
  );
}