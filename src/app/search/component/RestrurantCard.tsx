import Stars from '@/app/components/Stars';
import CalculateReviewAverage from '@/utils/CalculateReviewAverage';
import { Location, PRICE, Region, Review } from '@prisma/client';
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
  reviews:Review[]
}

const RestrurantCard = ({restraurant}:{restraurant:RestraurantProps}) => {

  const renderReview=()=>{
    const rating=CalculateReviewAverage(restraurant.reviews)
    if(rating>4) return "Awesome"
    else if(rating<=4 && rating >3) return "Good"
    else if(rating<=3 && rating>0) return "Average"
    return 0
  }
  return (
    <><div className="border-b flex pb-5">
    <img
      src={restraurant.main_image}
      alt=""
      className="w-44 rounded"
    />
    <div className="pl-5">
      <h2 className="text-3xl">{restraurant.name}</h2>
      <div className="flex items-start mt-2 mb-2">
        <Stars reviews={restraurant.reviews}/>
        <p className="ml-2 text-sm">{restraurant.reviews.length===0? "0 reviews":renderReview()}</p>
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