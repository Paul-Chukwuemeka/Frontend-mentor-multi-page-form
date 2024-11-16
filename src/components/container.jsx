import React from "react";
import SideBar from "./sideBar";
import ContainerMain from "./containerMain";


const Container = () => {
  return (
  <div className="container h-auto md:h-[600px] w-full  md:w-[90vw] lg:w-[70vw] grid lg:flex md:bg-white  md:flex-row gap-14 rounded-lg p-5 ">
      <SideBar />
      <ContainerMain />
    </div>
  );
};

export default Container;
