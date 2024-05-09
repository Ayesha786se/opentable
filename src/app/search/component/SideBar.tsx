import { Location, PRICE, Region } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

const price=[
  {
    
    price:PRICE.CHEAP,
    label:'$',
    className:'border w-full text-reg font-light rounded-l p-2 text-center'
  },
  {
    price:PRICE.REGULAR,
    label:'$$',
    className:'border-r border-t border-b w-full text-reg font-light p-2 text-center'
  },
  {
    price:PRICE.EXPENSIVE,
    label:'$$$',
    className:'border-r border-t border-b w-full text-reg font-light p-2 rounded-r text-center'
  },
  
]

const SideBar = ({locations,regions,searchParams}:{locations:Location[],regions:Region[],searchParams:{
  city?: string;
  region?: string;
  price?: PRICE;
}}) => {
  return (
    <>
    <div className="w-1/5">
        <div className="border-b pb-4">
          <h1 className="mb-2">Location</h1>
          <div className='flex flex-col capitalize'>{locations.map((location:Location)=>{
           return <Link href={{
            pathname: '/search',
            query: {...searchParams, city: location.name },
          }} className="font-light text-reg">{location.name}</Link>
          })}
          </div>
        </div>
        <div className="border-b pb-4 mt-3">
          <h1 className="mb-2">Region</h1>
          {/* while mapping array it's good to define type */}
         <div className='flex flex-col'>{regions.map((region:Region)=>{
          return <Link href={{
            pathname: '/search',
            query: {...searchParams, region: region.name },
          }} className="font-light text-reg">{region.name}</Link>
         })}</div>
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2">Price</h1>
          <div className="flex mr-5">
           {price.map(({price,label,className})=>{
            return <Link href={{
              pathname: '/search',
              query: {...searchParams, price },
            }} className={className}>
             {label}
           </Link>
           })}
            
          </div>
        </div>
      </div></>
  )
}

export default SideBar