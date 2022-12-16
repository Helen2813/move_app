import React from 'react';
import Image from "next/image";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

const  BASE_URL = "https://image.tmdb.org/t/p/original";

function Card({ result }) {
  return (
    <div className="">
      <Image
        src={BASE_URL + result.backdrop_path}
        width="200"
        height="100"
        layout="responsive"
        alt="preview"
      />
      <div className="">
        <p className="truncate">{result.overview}</p>
        <h2 className="">{result.title ?? result.name}</h2>
        <div>
          {result.release_date ?? result.first_air_date}
          <HandThumbUpIcon className="h-5" />
          {result.vote_count}
        </div>
      </div>
    </div>
  );
}

export default Card;
