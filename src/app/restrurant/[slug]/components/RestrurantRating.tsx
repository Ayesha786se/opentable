import Stars from '@/app/components/Stars'
import CalculateReviewAverage from '@/utils/CalculateReviewAverage'
import { Review } from '@prisma/client'

import React from 'react'

const RestrurantRating = ({reviews}:{reviews:Review[]}) => {
  return (
    <div className="flex items-end">
    <div className="ratings mt-2 flex items-center">
     <Stars reviews={reviews}/>
      <p className="text-reg ml-3"> {CalculateReviewAverage(reviews)} </p>
    </div>
    <div>
      <p className="text-reg ml-4">{reviews.length} Review{reviews.length===1? "":"s"}</p>
    </div>
  </div>
  )
}

export default RestrurantRating