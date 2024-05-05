import React from "react";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import RestrurantCard from "./component/RestrurantCard";

const searchPage = () => {
  return (
   
   
        <><Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SideBar />
          <div className="w-5/6">
            <RestrurantCard />
          </div>
        </div></>
      
  );
};

export default searchPage;
