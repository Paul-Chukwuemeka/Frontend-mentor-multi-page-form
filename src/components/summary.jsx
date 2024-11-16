import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import { cartContext } from "../App";
import Return from "./return.jsx";
import { Link } from "react-router-dom";

const Summary = () => {
  const {
    setPage,
    plan,
    duration,
    selectedAddOns,
    planPrice,
    addOnPrice,
  } = useContext(cartContext);

  useEffect(() => {
    console.log(planPrice)
    setPage(4);
  }, []);


  return (
    <div className="flex flex-col p-9 h-full relative" >
      <h1 className="text-3xl font-bold text-[#02295a] p-0">
        Finishing Up
      </h1>
      <p className="mb-3 text-[#9699ab]">
        Double check everything looks OK before
        confirming.
      </p>
      <div>
        <section className="p-4 bg-[#fafbff] rounded-lg mt-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium text-[#02295a]">
                {`${plan} ( ${duration})`}
              </h2>
              <Link
                to={"/plan"}
                className="text-[#9699ab] underline hover:text-[#02295a]"
              >
                Change
              </Link>
            </div>
            <p className="text-[#02295a] text-xl font-semibold">{ duration === "Monthly" ? `$${planPrice}/mo` : `$${planPrice}/yr`}</p>
          </div>
          <hr className="bg-[#9699ab]  my-1" />
          {selectedAddOns.map((addOn) => {
            return (
              <div className="flex justify-between items-center py-1.5">
                <h2 className="text-[#9699ab]">{addOn.addon}</h2>
                <p className="text-[#02295a] font-medium">
                  {duration == "Monthly"
                    ? `+$${addOn.price}/mo`
                    : `+$${addOn.priceYearly}/yr`}
                </p>
              </div>
            );
          })}
        </section>
        <div className="flex justify-between p-3 py-5">
          <h3 className="text-[#9699ab]">
            Total (per
            {`
            ${
              duration == "Monthly" ? "month" : "year"
            }`}
            )
          </h3>
          <h1 className="text-xl font-bold text-[#473dff]">+${planPrice + addOnPrice}/{duration == "Monthly" ? "mo" : "yr"}</h1>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[85px] absolute bottom-[17px] w-[89%]">
        <Link to={"/addOns"}>
          <Return />
        </Link>
        <Link
          className="self-end"
          to={"/success"}
        >
          <button className="bg-[#02295a] w-fit py-2 px-5 rounded-lg  text-white">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
