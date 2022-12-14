import React from 'react';
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, UsersIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <div className="bg-gray-700 text-gray-200 flex flex-col items-center p-6 select-none sm:flex-row justify-between">
      <div className="flex">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UsersIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/IMDB_-_SuperTinyIcons.svg/1200px-IMDB_-_SuperTinyIcons.svg.png"
        width="100"
        height="50"
        alt="logo"
        className="cursor-pointer active:brightness-110"
      />
    </div>
  );
}

export default Header;
