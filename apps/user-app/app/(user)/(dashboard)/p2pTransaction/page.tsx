import { P2pCard } from "@/components/P2pCard";
import { P2pTransaction } from "@/components/P2pTransaction";
import { getP2pTransactions } from "@/lib/actions/getP2pTransactions";



export default async function p2pTansaction() {

    const transactions = await getP2pTransactions()

    return (
        <div className="p-6 max-w-screen-xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">P2P Transaction</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <P2pCard />
            <div className="space-y-6">
                <P2pTransaction transactions={transactions}></P2pTransaction>
            </div>
          </div>
        </div>
    );
}