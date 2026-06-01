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
        <div className="py-6 flex-col">
            <span><OnRampTransactions transactions={transactions} ></OnRampTransactions></span>
            <span><P2pTransaction transactions={transactionsP2p} ></P2pTransaction></span>
        </div>
    </div>
}