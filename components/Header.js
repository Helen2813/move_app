import React from 'react';
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import { HomeIcon, UsersIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

function Header() {
  return (
    <div>
      <div className="">
        <HeaderIcon Icon={HomeIcon} title="HOME" />
        <HeaderIcon Icon={UsersIcon} title="ACCOUNT" />
        <HeaderIcon Icon={PhoneIcon} title="CONTACT" />
        <HeaderIcon Icon={InformationCircleIcon} title="ABOUT" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/IMDB_-_SuperTinyIcons.svg/1200px-IMDB_-_SuperTinyIcons.svg.png"
        width="100"
        height="100"
        alt="logo"
      />
    </div>
  );
}

export default Header;
