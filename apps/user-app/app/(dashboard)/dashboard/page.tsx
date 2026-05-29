import { HomeBalanceCard } from "@/components/HomeBalanceCard";
import { getBalance } from "@/lib/actions/getBalance"



export default async function Dashboard() {

    const balance = await getBalance();
    

    return <div>
        <HomeBalanceCard amount={balance.amount} locked={balance.locked}></HomeBalanceCard>
    </div>
}