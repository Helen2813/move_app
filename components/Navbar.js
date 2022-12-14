import React from 'react';
import requests from "../utils/requests";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <div className="flex justify-center bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl">
      {Object.entries(requests).map(( [key, { title, url }]) => (
        <p
          className="m-6 cursor-pointer hover:text-white active:text-red-400"
          key={key}
          onClick={() => (router.push(`?genre=${key}`))}
        >
          {title}
        </p>
      ))}
    </div>
  );
}

export default Navbar;
