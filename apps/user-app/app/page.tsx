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


import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/dashboard')
  } else {
    redirect('/api/auth/signin')
  }
  
}