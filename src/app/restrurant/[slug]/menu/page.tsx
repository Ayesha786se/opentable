
import React from "react";
import RestrurantMenu from "../components/RestrurantMenu";
import RestrurantNavBar from "../components/RestrurantNavBar";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

const getRestaurantMenu=async(slug:string)=>{
  const menu=await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      items:true
    }
  })

  if(!menu){
    throw new Error
  }
  return menu?.items
}

const RestrurantMenuPage =async ({params}:{params:{slug:string}}) => {
  const items=await getRestaurantMenu(params.slug)

  return (
    <>
 
            <div className="bg-white w-[100%] rounded p-3 shadow">
              <RestrurantNavBar slug={params.slug}/>

              <RestrurantMenu items={items}/>
            </div>
        
          {/* DESCRIPTION PORTION */}
    </>
  );
};

export default RestrurantMenuPage;
