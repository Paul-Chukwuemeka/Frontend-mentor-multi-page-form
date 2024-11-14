import React, {
  useContext,
  useEffect,
} from "react";
import { cartContext } from "../App";
import { Link } from "react-router-dom";
import Button from "./button";

const addOn = () => {
  const {
    setPage,
    selectedAddOns,
    setSelectedAddOns,
    plan
  } = useContext(cartContext);
  useEffect(() => {
    setPage(3);
  }, []);
  
  const addOns = [
    {
      addon: "Online service",
      benefit: "Access to multiplayer games",
      price: 1,
      priceYearly: 10,
      id: 1,
    },
    {
      addon: "Larger storage",
      benefit: "Extra 1TB of cloud save",
      price: 2,
      priceYearly: 20,
      id: 2,
    },
    {
      addon: "Customizable profile",
      benefit: "Custom theme on your profile",
      price: 2,
      priceYearly: 20,
      id: 3,
    },
  ];
  return (
    <div className="flex flex-col m-auto p-9 mt-0">
      <h1 className="text-3xl font-bold text-[#02295a] mb-2">
        Pick add-ons
      </h1>
      <p className="mb-6 text-[#9699ab]">
        Add-ons help enhance your gaming
        experience.
      </p>
      <div className="flex flex-col w-full">
        {addOns.map((addOn) => {
          return (
            <div
              key={addOn.id}
              className={
                selectedAddOns.some(
                  (i) => i.id === addOn.id
                )
                  ? "flex justify-between p-3 px-5 rounded-lg mb-1 border  border-[#473dff] items-center cursor-pointer"
                  : "flex justify-between p-3 px-5 rounded-lg mb-1 border items-center cursor-pointer"
              }
              onClick={() => {
                setSelectedAddOns(
                  (selectedAddOns) => {
                    if (
                      selectedAddOns.some(
                        (i) => i.id === addOn.id
                      )
                    ) {
                      return selectedAddOns.filter(
                        (i) => i.id !== addOn.id
                      );
                    } else {
                      return [
                        ...selectedAddOns,
                        addOn,
                      ];
                    }
                  }
                );
              }}
            >
              <div className="flex ">
                <input
                  type="checkbox"
                  name={addOn.addon}
                  id={addOn.addon}
                  checked={selectedAddOns.some(
                    (i) => i.id === addOn.id
                  )}
                  onChange={()=>{}}
                />
                <div className="mx-4">
                  <h1>{addOn.addon}</h1>
                  <h1>{addOn.benefit}</h1>
                </div>
              </div>
              <h2>{plan == "Monthly" ?`+$${addOn.price}/mo` : `+$${addOn.priceYearly}/yr`}</h2>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-[45px]">
        <Link
          to={"/plan"}
          className=" text-xl text-[#9699ab]"
        >
          Go Back
        </Link>
        <Link
          className="self-end "
          to={"/summary"}
        >
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default addOn;