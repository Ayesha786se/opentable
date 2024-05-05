import React from "react";
import NavBar from "../components/NavBar";
import Header from "./component/Header";
import SideBar from "./component/SideBar";
import RestrurantCard from "./component/RestrurantCard";

const searchPage = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SideBar />
          <div className="w-5/6">
            <RestrurantCard />
          </div>
        </div>
      </main>
    </main>
  );
};

export default searchPage;
