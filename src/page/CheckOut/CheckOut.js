import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const details = useLoaderData();
  return (
    <div>
      <h1>{details.pragram_name}</h1>
    </div>
  );
};

export default CheckOut;
