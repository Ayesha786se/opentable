
import React from 'react'
import fullStar from '../../../public/icons/full-star.png'
import halfStar from '../../../public/icons/half-star.png'
import emptyStar from '../../../public/icons/empty-star.png'
import Image from 'next/image'
import { Review } from '@prisma/client'
import CalculateReviewAverage from '@/utils/CalculateReviewAverage'

const Stars = ({reviews,rating}:{reviews:Review[],rating:number}) => {
  const reviewsRating= rating || CalculateReviewAverage(reviews)

  const renderStar=()=>{
    const stars=[];
    for(let i=0; i<5;i++){
      const difference= parseFloat((reviewsRating-i).toFixed(1))
      if(difference >=1) stars.push(fullStar)
        else if( difference < 1 && difference >0){
      if(difference <=.2)stars.push(emptyStar)
       else if(difference >= 0.2 && difference <= 0.6)stars.push(halfStar)
          else stars.push(emptyStar)
      }
    }
return stars.map((star)=>{
  return <div className='relative'><Image src={star} alt='star-rating' className='w-3 h-3 mr-1'/></div>
})
  }
  return (
    <div className='flex'>{renderStar()}</div>
  )
   
  
}

export default Stars