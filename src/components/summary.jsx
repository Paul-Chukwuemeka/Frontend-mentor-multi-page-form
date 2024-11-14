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
  } = useContext(cartContext);

  useEffect(() => {
    console.log(plan)
    setPage(4);
  }, []);

  const [addOnPrice, setAddOnPrice] = useState(0);
  useEffect(() => {
    selectedAddOns.map((addon) => {
      setAddOnPrice(addOnPrice + addon.price);
    });
  }, [addOnPrice]);
  return (
    <div className="flex flex-col p-9 h-full">
      <h1 className="text-3xl font-bold text-[#02295a] p-0">
        Finishing Up
      </h1>
      <p className="mb-3 text-[#9699ab]">
        Double check everything looks OK before
        confirming.
      </p>
      <div>
        <section className="p-4 bg-[#d6d9e6] rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-[#02295a]">
                {`${plan} ( ${duration})`}
              </h2>
              <Link
                to={"/plan"}
                className="text-[#9699ab] underline"
              >
                Change
              </Link>
            </div>
            <p>{`+$${planPrice}`}</p>
          </div>
          <hr className="bg-[#9699ab]  my-1" />
          {selectedAddOns.map((addOn) => {
            return (
              <div className="flex justify-between items-center py-1.5">
                <h2>{addOn.addon}</h2>
                <p>
                  {plan == "Monthly"
                    ? `+$${addOn.price}`
                    : `+$${addOn.priceYearly}`}
                </p>
              </div>
            );
          })}
        </section>
        <div>
          <h3 className="p-3">
            Total (per
            {`
            ${
              duration == "Monthly" ? "month" : "year"
            }`}
            )
          </h3>
          {/* <h3>${planPrice + addon.price}</h3> */}
        </div>
      </div>
      <div className="flex justify-between items-center mt-[85px] ">
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
