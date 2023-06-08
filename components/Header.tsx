// everything default is server component - need to do this to make it client
"use client";

import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <Image
          src="http://links.papareact.com/c2cdd5"
          alt="trello logo"
          width={300}
          height={300}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-5 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>

          {/* avatar */}
          <Avatar name="Jacinto Mendes" round size="50" color="#0055D1" />
        </div>
      </div>
    </header>
  );
}

export default Header;
