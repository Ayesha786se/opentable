
import Link from "next/link";
import React from "react";
import {ResturantCardType} from '../page';
import RestrurantPrice from "./Price";

interface Props {
  restrurant:ResturantCardType
}

const Card = ({restrurant}:Props) => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/restrurant/${restrurant.slug}`}>
      <img
        src={restrurant.main_image}
        alt=""
        className="w-full h-36"
      />
      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2">{restrurant.name}</h3>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2">77 reviews</p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className=" mr-3">{restrurant.region.name}</p>
          <RestrurantPrice price={restrurant.price}/>
          <p>{restrurant.location.name}</p>
        </div>
        <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
      </div></Link>
    </div>
  );
};

export default Card;
