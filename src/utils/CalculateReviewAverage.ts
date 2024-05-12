import { Review } from '@prisma/client'


const CalculateReviewAverage = (review:Review[]) => {
    //if no reviews
    if(!review.length) return 0

    //sum of all reviews/total views
  return review.reduce((sum,review)=>{
    return sum+review.rating
  },0)/ review.length
}

export default CalculateReviewAverage