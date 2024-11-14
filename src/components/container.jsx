import React from "react";
import SideBar from "./sideBar";
import ContainerMain from "./containerMain";


const Container = () => {
  return (
  <div className="h-[500px] w-[70vw] bg-white flex gap-14 rounded-lg p-5">
      <SideBar />
      <ContainerMain />
    </div>
  );
};

export default Container;
