import React, {
  useContext,
  useEffect,
} from "react";
import { cartContext } from "../App";
import ArcadeImg from "../assets/images/icon-arcade.svg";
import AdvancedImg from "../assets/images/icon-advanced.svg";
import ProImg from "../assets/images/icon-pro.svg";
import Button from "./button";
import { Link } from "react-router-dom";

const Plan = () => {
  const {
    setPage,
    plan,
    setPlan,
    duration,
    setDuration,
    planPrice,
    setPlanPrice,
  } = useContext(cartContext);

  useEffect(() => {
    setPage(2);
  }, []);

  useEffect(()=>{
    console.log(planPrice)
  }, [planPrice])
  const plans = [
    {
      img: ArcadeImg,
      plan: "Arcade",
      price: 9,
      priceYearly: 90,
      promo: "2 months free",
    },
    {
      img: AdvancedImg,
      plan: "Advanced",
      price: 12,
      priceYearly: 120,
      promo: "2 months free",
    },
    {
      img: ProImg,
      plan: "Pro",
      price: 15,
      priceYearly: 150,
      promo: "2 months free",
    },
  ];
  return (
    <div className="flex flex-col m-auto p-9 ">
      <h1 className="text-3xl font-bold text-[#02295a] mb-2">
        Select your plan
      </h1>
      <p className="mb-6 text-[#9699ab]">
        You have the option of monthly or yearly
        billing
      </p>
      <div className=" flex justify-between">
        {plans.map((p) => {
          return (
            <div
              className={
                plan == p.plan
                  ? "p-4 flex flex-col justify-between border-[#473dff] border h-44 w-40 rounded-lg "
                  : "p-4 flex flex-col justify-between border h-44 w-40 rounded-lg"
              }
              key={p.plan}
              onClick={() => {
                setPlan(p.plan);
                setPlanPrice(
                  duration === "Monthly"
                    ? `${p.price}/Mo`
                    : `${p.priceYearly}/Yr `
                );
              }}
            >
              <img
                className="w-14"
                src={p.img}
                alt={p.plan}
              />
              <div
              >
                <h2 className="text-xl text-[#02295a] font-bold">
                  {p.plan}
                </h2>
                <h3 className="text-[#9699ab] font-bold">
                  {duration == "Monthly"
                    ? `$${p.price}/mo`
                    : `$${p.priceYearly}/Yr`}
                </h3>
                <p className="text-[#02295a] font-bold">
                  {duration == "Yearly"
                    ? `${p.promo}`
                    : ""}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-4 bg-[#d6d9e6] rounded-lg flex p-5 items-center justify-center mt-4">
        <h2 className="p-0 m-0  ">Monthly</h2>
        <div
          className="bg-[#02295a] w-12 h-5 p-1 m-5 flex items-center rounded-full flex-col justify-center cursor-pointer"
          onClick={() => {
            duration == "Monthly"
              ? setDuration("Yearly")
              : setDuration("Monthly");
          }}
        >
          <div
            className={
              duration == "Monthly"
                ? "h-3.5 w-3.5 bg-white rounded-full relative self-start"
                : "h-3.5 w-3.5 bg-white rounded-full self-end"
            }
          ></div>
        </div>
        <h2 className="p-0 m-0 ">Yearly</h2>
      </div>
      <div className="flex justify-between mt-[47px] items-center ">
        <Link
          to={"/"}
          className=" h-fit text-xl text-[#9699ab]"
        >
          Go Back
        </Link>
        <Link className="self-end" to={"/addOns"}>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Plan;
