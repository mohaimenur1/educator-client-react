import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const details = useLoaderData();
  return (
    <div className="">
      <h1 className="text-center m-5">{details.pragram_name}</h1>
    </div>
  );
};

export default CheckOut;
