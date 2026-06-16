import { AccountDetailsCard } from "@/components/AccountDetailsCard";
import { getDetails } from "@/lib/actions/getDetails"




export default async function details(){


    const user = await getDetails();


    return <div>
        {/* Account Page soon... */}

        <AccountDetailsCard email={user.email} name={user.name} number={user.number} ></AccountDetailsCard>

        
    </div>
}