import React from "react";
import SideBar from "./sideBar";
import ContainerMain from "./containerMain";


const Container = () => {
  return (
  <div className="container h-[600px] w-full bg-[url(../assets/images/bg-sidebar-desktop.svg)] md:w-[70vw] flex flex-col lg:flex md:bg-white md:bg-[url()] lg:flex-row gap-14 rounded-lg p-5 ">
      <SideBar />
      <ContainerMain />
    </div>
  );
};

export default Container;
