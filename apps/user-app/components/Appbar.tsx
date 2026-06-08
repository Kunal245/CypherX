


import { Button } from "@workspace/ui/components/button";
import { SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar";


interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        
        <span className="text-lg font-semibold">CypherX</span>
        <span className="text-lg font-semibold text-primary"> pay</span>

      </div>
      <Button variant="destructive" onClick={user ? onSignout : onSignin}>
        {user ? "Logout" : "Login"}
      </Button>
    </div>
  );
};