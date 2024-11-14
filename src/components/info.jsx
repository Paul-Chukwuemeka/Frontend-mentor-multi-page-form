import React from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import { useContext, useEffect } from "react";
import { cartContext } from "../App";

const Info = () => {
  const {
    setName,
    name,
    email,
    phone,
    setEmail,
    setPhone,
    setPage,
  } = useContext(cartContext);

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="flex flex-col m-auto p-9 ">
      <div>
        <h1 className="text-3xl font-bold text-[#02295a] mb-2">
          Personal Info
        </h1>
        <p className="mb-6 text-[#9699ab]">
          {" "}
          Please provide your name, email address,
          and phone number.
        </p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col"
      >
        <label className="text-lg" htmlFor="name">
          Name
        </label>
        <input
          required
          onInput={(e) => {
            setName(e.target.value);
            console.log(e.target.value);
          }}
          value={name}
          name="name"
          type="text"
          placeholder="e.g. John Doe"
          className="border mb-2 p-2 rounded-lg"
        />
        <label
          className="text-lg"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          required
          type="email"
          placeholder="e.g. JohnDoe@example.org"
          className="border mb-2 p-2 rounded-lg"
          onInput={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value);
          }}
          value={email}
        />
        <label
          className="text-lg"
          htmlFor="phone"
        >
          Phone
        </label>
        <input
          required
          type="tel"
          placeholder="e.g. +1 345 678 9012"
          className="border m-1  p-2 rounded-lg"
          onInput={(e) => {
            setPhone(e.target.value);
            console.log(e.target.value);
          }}
          value={phone}
        />
      <div className="flex ml-auto justify-between">
      <Link
        to={"/plan"}
        className="self-end mt-[45px]"
      >
        {" "}
        <Button />
      </Link>
      </div>
      </form>
    </div>
  );
};

export default Info;
