import { Location, PRICE, Region } from '@prisma/client';
import Link from 'next/link';
import React from 'react'

interface RestraurantProps{
  id: number;
  name: string;
  main_image: string;
  slug: string;
  price: PRICE;
  location: Location;
  region: Region
}

const RestrurantCard = ({restraurant}:{restraurant:RestraurantProps}) => {
  return (
    <><div className="border-b flex pb-5">
    <img
      src={restraurant.main_image}
      alt=""
      className="w-44 rounded"
    />
    <div className="pl-5">
      <h2 className="text-3xl">{restraurant.name}</h2>
      <div className="flex items-start">
        <div className="flex mb-2">*****</div>
        <p className="ml-2 text-sm">Awesome</p>
      </div>
      <div className="mb-9">
        <div className="font-light flex text-reg">
          <p className="mr-4">Price= {restraurant.price}</p>
          <p className="mr-4">{restraurant.region.name}</p>
          <p className="mr-4">{restraurant.location.name}</p>
        </div>
      </div>
      <div className="text-red-600">
        <Link href={`/restrurant/${restraurant.slug}`}>View more information</Link>
      </div>
    </div>
  </div></>
  )
}

export default RestrurantCard