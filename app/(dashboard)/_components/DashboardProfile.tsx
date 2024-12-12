import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DollarSign, Power, User, Users } from "lucide-react";
import { useSession } from "next-auth/react";

const DashboardProfile = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="mb-6 px-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex justify-between items-center gap-4">
            <Avatar className="h-10 w-10 border">
              <AvatarImage
                src={
                  session?.user?.image ||
                  "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"
                }
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-sm font-semibold">{session?.user?.name}</h4>
              <p className="text-xs">Admin</p>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session?.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <User className="h-3 w-3" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <DollarSign className="h-3 w-3" />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Users className="h-3 w-3" />
            Team
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Power className="h-3 w-3" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DashboardProfile;
