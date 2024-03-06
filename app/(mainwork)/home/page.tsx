import { LogoutButton } from "../../../components/auth/logout-button";
import HomeWorkspace from "../_components/workspace/homespace";
import { useCurrentUser } from "../../../hooks/use-current-user";
import { ScrollArea } from "../../../components/ui/scroll-area";

const HomePage = () => {

  return (
    <ScrollArea className="h-[600px] w-full rounded-md border p-4">
    <div className="h-full">
      <div className="ml-3">
        <h1>Home</h1>
      </div>
      <HomeWorkspace />
    </div>
    </ScrollArea>
  );
};

export default HomePage;
