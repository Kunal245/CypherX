import { Button } from "@workspace/ui/components/button"
import { PrismaClient } from "@workspace/db/client"
import { useBalance } from "@workspace/store/useBalance";
const client = new PrismaClient();

export default function Page() {

  const balance = useBalance();

  return <div>
    hi there 
  </div>
}
