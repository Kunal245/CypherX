import { HomeBalanceCard } from "@/components/HomeBalanceCard";
import { OnRampTransactions } from "@/components/OnRampTransaction";
import { P2pTransaction } from "@/components/P2pTransaction";
import { getBalance } from "@/lib/actions/getBalance"
import { getOnRampTransactions } from "@/lib/actions/getOnRampTransactions";
import { getP2pTransactions } from "@/lib/actions/getP2pTransactions";



export default async function Dashboard() {

    const balance = await getBalance();
    const transactions = await getOnRampTransactions();
    const transactionsP2p = await getP2pTransactions();
    

    return <div className="flex-row py-2">
        <HomeBalanceCard amount={balance.amount} locked={balance.locked}></HomeBalanceCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
            <div><OnRampTransactions transactions={transactions} ></OnRampTransactions></div>
            <div><P2pTransaction transactions={transactionsP2p} ></P2pTransaction></div>
        </div>
    </div>
}