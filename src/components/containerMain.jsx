import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Info from "./info";
import Plan from "./plan";
import AddOn from "./addOn";
import Summary from "./summary";
import SuccessScreen from "./successScreen";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Info />,
  },
  {
    path: "/Plan",
    element: <Plan />,
  },
  {
    path: "/addOns",
    element: <AddOn />,
  },
  {
    path: "/summary",
    element: <Summary />,
  },
  {
    path: "/success",
    element: <SuccessScreen />,
  },
]);
const ContainerMain = () => {
  return (
    <div className="w-[65%]">
      <RouterProvider router={router} />
    </div>
  );
};

export default ContainerMain;
