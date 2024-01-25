"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { ModeToggle } from "./components/theme-toggle";

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

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    logout();
  };

  const menus = [
    { icon: <AiOutlineQuestionCircle />, title: "About", path: "/" },
    { icon: <BsStars />, title: "Explore", path: "/pages/explore" },
    // { icon: <BsTelephone />, title: "Login", path: "/pages/signIn" },
  ];

  return (
    <nav className="bg-opacity/50 fixed top-0 z-10 w-full border-b pt-2 backdrop-blur-md md:border-0 px-4  lg:px-[270px]">
      <div className="flex flex-row justify-between items-center  py-3 px-2">
        <Link href="/">
          <ImOffice size={30} />
        </Link>
        <div className="hidden lg:block">
          <div
            className={`mt-4 pb-3 md:mt-0 md:block md:pb-0 md:text-xl ${
              state
                ? "overflow absolute right-0 mr-[1rem] w-[11rem] flex-auto border-[1px] border-solid border-white bg-black text-center leading-6 md:border-none md:bg-transparent lg:border-none lg:bg-transparent"
                : "hidden"
            }`}
          >
            <ul
              className={`items-right justify-center space-y-8 px-[2rem] md:mr-0 md:flex md:space-x-6 md:space-y-0 lg:mr-[3rem] ${
                state ? "p-[3rem] md:p-0 lg:p-0" : "hidden"
              }`}
            >
              {menus.map((item, idx) => (
                <li
                  key={idx}
                  className={`font-nunito hover:text-white ${
                    state
                      ? "text-primary md:text-[#8F9BB7] lg:text-[#8F9BB7]"
                      : "text-[#8F9BB7]"
                  }`}
                >
                  <div
                    className={`${
                      state
                        ? "absolute ml-[4px] mt-[4px] md:hidden lg:hidden"
                        : "hidden"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div>
            {isAuthenticated && (
              <DropdownMenu>
                <DropdownMenuTrigger className="px-2">
                  <Avatar>
                    <AvatarImage />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel className="text-xl">
                    {user.first_name}
                  </DropdownMenuLabel>
                  <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <Button
                      onClick={logoutHandler}
                      className="text-[#ff4545]"
                    >
                      Sign Out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            {!isAuthenticated && (
              <Button>
                <Link className="px-2" href="/pages/signIn">
                  Sign In
                </Link>
              </Button>
            )}
          </div>
          <ModeToggle />
          <div className="md:hidden">
            <button
              className="rounded-md p-2 text-gray-100 outline-none focus:border focus:border-gray-400"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
            <div
              className={`mt-4 pb-3 md:mt-0 md:block md:pb-0 md:text-xl ${
                state
                  ? "overflow absolute right-0 mr-[1rem] w-[11rem] flex-auto border-[1px] border-solid border-white bg-black text-center leading-6 md:border-none md:bg-transparent lg:border-none lg:bg-transparent"
                  : "hidden"
              }`}
            >
              <ul
                className={`items-right justify-center space-y-8 px-[2rem] md:mr-0 md:flex md:space-x-6 md:space-y-0 lg:mr-[3rem] ${
                  state ? "p-[3rem] md:p-0 lg:p-0" : "hidden"
                }`}
              >
                {menus.map((item, idx) => (
                  <li
                    key={idx}
                    className={`font-nunito hover:text-white ${
                      state
                        ? "text-primary md:text-[#8F9BB7] lg:text-[#8F9BB7]"
                        : "text-[#8F9BB7]"
                    }`}
                  >
                    <div
                      className={`${
                        state
                          ? "absolute ml-[4px] mt-[4px] md:hidden lg:hidden"
                          : "hidden"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <Link href={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
