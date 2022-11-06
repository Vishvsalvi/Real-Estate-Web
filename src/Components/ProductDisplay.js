import React from "react";
import ProductCard from "./ProductCard";
import { PropertyContext } from "../App";
import { useContext } from "react";

const ProductDisplay = () => {
  const { state } = useContext(PropertyContext);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full relative top-28 ">
        {state.result.map((property, index) => {
          const { name, location, price, img, furnish_type } = property;
          return (
            <ProductCard
              name={name}
              location={location}
              price={price}
              furnish_type={furnish_type}
              img={img}
              key={index}
            />
          );
        })}
        <div
          className={`${
            state.result.length
              ? "hidden"
              : "w-screen py-20 text-center font-poppins font-bold text-gray-300 text-3xl"
          }`}
        >
          <h1>Couldn't find what you're looking for</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
