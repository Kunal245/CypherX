import { getDetails } from "@/lib/actions/getDetails"




export default async function details(){


    const user = await getDetails();


    return <div>
        Account Page soon...

        
    </div>
}