import { Button } from "@workspace/ui/components/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@workspace/ui/components/card";
import { User2Icon } from "lucide-react";



export const AccountDetailsCard = ({email, name, number}: {email: string; name: string; number: number}) => {


    return (
        <Card className="w-full max-w-full bg-primary/60 bg-gradient-to-br from-secondary/20 via-primary/20 to-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User2Icon className="h-5 w-5" />
              Account Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-row justify-left py-2">
              <span className="text-3xl font-bold tracking-tight text-slate-400">Welcome,</span>
              <span className="px-1 text-3xl tracking-tight">{name}</span>
            </div>
            
            {/* <div className="flex justify-between py-2">
              <span className="text-3xl font-bold tracking-tight">{hideBalance ? "🙊" : `₹ ${(locked + amount) / 100} INR`}</span>
              <Button variant="outline" size="icon" onClick={() => {setHideBalance(!hideBalance)}} >
                {hideBalance ? <EyeIcon></EyeIcon> : <EyeClosedIcon></EyeClosedIcon>}
              </Button>
            </div> */}
          </CardContent>
          <CardFooter>
            {/* <div className="flex justify-between py-2">
              <Link href="/p2pTransaction">
                <span className="text-3xl font-bold tracking-tight">
                  <Button variant="outline" className="">Send</Button>
                </span>
              </Link>
              <Link href="/transfer">
                <span className="px-2 text-3xl font-bold tracking-tight">
                  <Button variant="outline" className="">Add Money</Button>
                </span>
              </Link>
            </div> */}
            <div className="flex flex-col text-sm" >
              <div className="justify-left py-2">
                <span className="px-1 text-slate-300 tracking-tight">Email:</span>
                <span className="px-1 text-slate-200 tracking-tight">{email}</span>
              </div>
              <div className="justify-left py-1 text-sm">
                <span className="px-1 text-slate-300 tracking-tight">Number:</span>
                <span className="px-1 text-slate-200 tracking-tight">{number}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
    )
}