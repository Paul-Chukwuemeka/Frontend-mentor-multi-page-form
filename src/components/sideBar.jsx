import React, {
  useContext,
  useEffect,
} from "react";
import { cartContext } from "../App";

const steps = [
  {
    number: 1,
    step: "step 1",
    title: "YOUR INFO",
  },
  {
    number: 2,
    step: "step 2",
    title: "SELECT PLAN",
  },
  {
    number: 3,
    step: "step 3",
    title: "ADD-ONS",
  },
  {
    number: 4,
    step: "step 4",
    title: "SUMMARY",
  },
];
const SideBar = () => {
  const { page } = useContext(cartContext);
  return (
    <div className="side-bar w-full md:w-[250px] border h-full rounded-xl flex md:flex-col p-4 text-white">
      {steps.map((step) => {
        return (
          <div
            className="flex p-2 items-center"
            key={step.number}
          >
            {
              <button
                className={
                  page == step.number
                    ? "bg-[#bfe2fd] text-black focus:outline-none border rounded-full h-10 w-10 mr-4 flex justify-center items-center"
                    : "outline-none border rounded-full h-10 w-10 mr-4 flex justify-center items-center items- text-white"
                }
              >
                {step.number}
              </button>
            }
            <div>
              <p className="text-[#d6d9e6] text-500">
                {step.step}
              </p>
              <p className="font-bold text-white text-md">
                {step.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
