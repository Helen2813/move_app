import React from 'react';
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const  BASE_URL = "https://image.tmdb.org/t/p/original";

function Card({ result }) {
  return (
    <div
      className="p-3 hover:text-white cursor-pointer active:text-red-400
      xl:hover:scale-105 transition-transform duration-200"
    >
      <Image
        src={BASE_URL + result.backdrop_path}
        width="200"
        height="100"
        layout="responsive"
        alt="preview"
      />
      <div className="p-2 select-none">
        <p className="truncate text-lg">{result.overview}</p>
        <h2 className="text-lg font-bold">{result.title ?? result.name}</h2>
        <div className="flex items-center">
          {result.release_date ?? result.first_air_date}
          <HandThumbUpIcon className="h-5 ml-3 mr-1" />
          {result.vote_count}
        </div>
      </div>
    </div>
  );
}

export default Card;
