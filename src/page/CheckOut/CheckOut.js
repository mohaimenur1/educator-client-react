import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const details = useLoaderData();
  return (
    <div className="">
      <h1 className="text-center m-5">{details.pragram_name}</h1>
      <h3 className="text-center fs-3 fst-italic display-2">
        Thank's For Getting Premium Access
      </h3>
    </div>
  );
};

export default CheckOut;
