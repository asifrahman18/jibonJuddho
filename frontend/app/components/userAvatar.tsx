import React from "react";
import { useContext } from "react";

import { AuthContext } from "@/context/AuthContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { EditProfile } from "../user/editProfile";

const UserAvatar = () => {
  const { user, logout } = useContext(AuthContext);

  const logoutHandler = async () => {
    await logout();
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="px-2 md:inline">
          <Avatar>
            <AvatarImage src="/icon.png" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="text-xl font-extrabold">
            {user.first_name}
          </DropdownMenuLabel>
          <DropdownMenuItem className="font-bold border-b-2">{user.email}</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/user">Dashboard</Link>
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
            <EditProfile />
          </DropdownMenuItem> */}
          <DropdownMenuLabel
            onClick={logoutHandler}
            className="text-[#ff4545] hover:cursor-pointer"
          >
            Sign Out
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAvatar;
