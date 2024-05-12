import React from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import RestrurantCard from "./component/RestrurantCard";
import { PRICE, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

interface searchParams {
  city?: string;
  region?: string;
  price?: PRICE;
}
//to fetch restraurants
const fetchRestraurant = (searchParams: searchParams) => {
  //fetch restraurant on basis of price, location,region
  const where: any = {};

  if(searchParams.city){
    const location={
      name:{
        equals:searchParams.city.toLocaleLowerCase()
      }
    }
    where.location=location
    console.log(location)
  }

  if(searchParams.region){
    const region={
      name:{
        equals:searchParams.region.toLocaleLowerCase()
      }
    }
    where.region=region
  }

  if(searchParams.price){
    const price={
     
        equals:searchParams.price
      
    }
    where.price=price
    console.log(price)
  }


  const select = {
    id: true,
    name: true,
    location: true,
    region: true,
    slug: true,
    main_image: true,
    price: true,
    reviews:true
   
  };

  // as we have defined where obj no need of this 
  // if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    // where: {
    //   location: {
    //     name: {
    //       equals: city.toLocaleLowerCase(),
    //     },
    //   },
    // },
    where,
    select,
  });
};

//fetching location
const fetchLocation = () => {
  return prisma.location.findMany();
};

const fetchRegion = () => {
  return prisma.region.findMany();
};

// to  make it optional using ? as user will not always search for same city region price
const searchPage = async ({
  searchParams,
}: {
  searchParams:searchParams;
}) => {
  const restraurants = await fetchRestraurant(searchParams);
  console.log(restraurants);

  const locations = await fetchLocation();
  const regions = await fetchRegion();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBar
          locations={locations}
          regions={regions}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restraurants.length ? (
            restraurants.map((restraurant) => {
              return <RestrurantCard restraurant={restraurant} />;
            })
          ) : (
            <p className=" text-center font-bold text-3xl text-red-500 mt-[8rem]">
              Sorry no Restraurant is found{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default searchPage;
