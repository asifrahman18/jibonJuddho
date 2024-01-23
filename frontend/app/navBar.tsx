"use client";

import { Avatar, DropdownMenu } from "@radix-ui/themes";
import { Menu } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import { ModeToggle } from "./components/theme-toggle";

export default function Navbar() {
  const [state, setState] = React.useState(false);
  const { status, data: session } = useSession();

  return (
    <nav className="bg-opacity/50 fixed top-0 z-10 w-full border-b pt-2 backdrop-blur-md md:border-0">
      <div className="mx-auto max-w-screen-xl px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between py-3 md:ml-5 md:block md:py-5  xl:-ml-10">
          <Link href="/">
            <ImOffice size={30} />
          </Link>
          <div className="md:hidden">
            <button
              className="rounded-md p-2 text-gray-100 outline-none focus:border focus:border-gray-400"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
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
            <li
              className={`font-nunito ${
                state
                  ? "text-primary md:text-[#8F9BB7] lg:text-[#8F9BB7]"
                  : "text-[#8F9BB7]"
              }`}
            >
              {" "}
              <div
                className={`${
                  state
                    ? "absolute ml-[4px] mt-[4px] md:hidden lg:hidden"
                    : "hidden"
                }`}
              >
                <AiOutlineQuestionCircle />
              </div>
              <Link href="/">About</Link>
            </li>
            <li
              className={`font-nunito ${
                state
                  ? "text-primary md:text-[#8F9BB7] lg:text-[#8F9BB7]"
                  : "text-[#8F9BB7]"
              }`}
            >
              {" "}
              <div
                className={`${
                  state
                    ? "absolute ml-[4px] mt-[4px] md:hidden lg:hidden"
                    : "hidden"
                }`}
              >
                <BsStars />
              </div>
              <Link href="/pages/explore">Explore</Link>
            </li>
            <li>
              {status === "authenticated" && (
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <Avatar
                      src={session.user!.image!}
                      fallback="?"
                      radius="full"
                    />
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Label>
                      {session.user!.name}
                    </DropdownMenu.Label>
                    <DropdownMenu.Label>
                      {session.user!.email}
                    </DropdownMenu.Label>
                    <DropdownMenu.Item>
                      <Link href="/">Sign Out</Link>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              )}
              {status === "unauthenticated" && <Link href="/pages/signIn">Sign In</Link>}
            </li>
          </ul>
        </div>
        <div>
            <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
