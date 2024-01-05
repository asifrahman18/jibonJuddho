"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { AiOutlineHome, AiOutlineQuestionCircle } from "react-icons/ai"
import { ImOffice } from "react-icons/im";
import { BsStars, BsTelephone } from "react-icons/bs"

export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { icon: <AiOutlineQuestionCircle />, title: "About", path: "/" },
    { icon: <BsStars />, title: "Explore", path: "/" },
    { icon: <BsTelephone />, title: "Login", path: "/" },
  ]

  return (
    <nav className="bg-opacity/50 fixed top-0 z-10 w-full border-b pt-2 backdrop-blur-md md:border-0 bg-purple-100">
      <div className="mx-auto max-w-screen-xl px-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between py-3 md:ml-5 md:block md:py-5  xl:-ml-10">
          <Link href="/">
              <ImOffice size={30}/>
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
            {menus.map((item, idx) => (
              <li
                key={idx}
                className={`font-nunito hover:text-black ${
                  state
                    ? "text-white md:text-[#8F9BB7] lg:text-[#8F9BB7]"
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
    </nav>
  )
}
