import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { PropertyContext } from "../App";

const Filter = () => {
	const { filter, newSearch } = useContext(PropertyContext);
  const [inputText, setInputText] = useState("");
 


 
  return (
    <div>
      <div className="w-full md:w-2/3 shadow p-5 rounded-lg bg-white relative mx-auto mt-14 ">
        <div className="relative">
          <label className="sr-only" htmlFor="search">
            {" "}
            Search{" "}
          </label>

          <input
            autoComplete="false"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
              newSearch(e.target.value);
            }}
            className="h-10 w-full rounded-md border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-full focus:border-blue-700"
            id="search"
            type="search"
            placeholder="Search property name or location"
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters</p>
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select 
              onChange={(e) => {
                const selectedProperty = e.target.value;
                filter(selectedProperty);
              }}
              className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            >
              <option  value="Any Location">Any Location</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="kerela">Kerela</option>
              <option value="bangalore">Bangalore</option>
              <option value="gujarat">Gujarat</option>
              <option value="himachal">Himachal</option>
            </select>

            <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="Furnish Type">Furnish Type</option>
              <option value="Fully Furnished">Fully Furnished</option>
              <option value="Partially Furnished">Partially Furnished</option>
              <option value="Not Furnished">Not Furnished</option>
            </select>

            <select className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Any Price</option>
              <option value="5000-10000">₹ 5000 - ₹10000</option>
              <option value="10000-15000">₹10000 - ₹15000</option>
              <option value="15000-20000">₹15000 - ₹20000</option>
              <option value="20000-25000">₹20000 - ₹25000</option>
            </select>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
