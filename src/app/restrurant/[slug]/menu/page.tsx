import NavBar from "@/app/components/NavBar";
import React from "react";
import RestrurantMenu from "../components/RestrurantMenu";
import RestrurantNavBar from "../components/RestrurantNavBar";
import Header from "../components/Header";

const RestrurantMenuPage = () => {
  return (
    <>
 
            <div className="bg-white w-[100%] rounded p-3 shadow">
              <RestrurantNavBar />

              <RestrurantMenu />
            </div>
        
          {/* DESCRIPTION PORTION */}
    </>
  );
};

export default RestrurantMenuPage;
