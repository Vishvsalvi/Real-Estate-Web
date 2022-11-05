import React, { useEffect } from "react";
import { useState } from "react";
import { useReducer } from "react";
import "./App.css";
import Body from "./Components/Body";
import ProductDisplay from "./Components/ProductDisplay";
import { propertyData } from "./data";

// Creating Context to pass data in all the components
export const PropertyContext = React.createContext(); 

function App() {



  const [location, setLocation] = useState("Any Location")
  const [furnish, setFurnish] = useState("Furnish Type");


  useEffect(()=>{
    filter(location)
  },[location])



  function reducer(state, action) { // 

    if (action.type === "SEARCH") {
      return {
        result: action.payload,
      };
    } else {
      return {
        result: propertyData,
      };
    }
  }

  const states = {
    result: propertyData,
  };

  const [state, dispatch] = useReducer(reducer, states);

  function newSearch(name){
    const propertyName = name.toLowerCase();
    const filteredData = propertyData.filter(item=>{
      return Object.keys(item).some(key=>{
        return item[key].toString().includes(propertyName)
      })
    })

    dispatch({ type:"SEARCH", payload:filteredData })

  }


  function advancedFilter(advancedLocation, advancedFurnish){
 
    let payloadData = propertyData;
    // console.log(advancedLocation, advancedFurnish);
    if(advancedLocation === "Any Location"){
      payloadData = propertyData
    }
    if(advancedLocation !== "Any Location"){
      payloadData = propertyData.filter((element)=>{
        return advancedLocation === element.location
      })
    }
    if(advancedFurnish !== "Any Location"){
      payloadData = propertyData.filter((element)=>{
        return advancedFurnish === element.furnish_type
      })
    }
    console.log(payloadData)
  }

 // Filtering location

  function filter(selectedLocation){
    setLocation(selectedLocation)

    const payloadData = propertyData;
    

    if(location==="Any Location"){
      dispatch({ type:"SEARCH", payload:propertyData })
    }else{
    const newList = propertyData.filter((property) => {
      return property.location === location ;
    });

    dispatch({ type:"SEARCH", payload:newList })

    }
  }


  return (
    <PropertyContext.Provider value={{ propertyData, state, filter, newSearch,advancedFilter }}> 
      <Body />
      <ProductDisplay />
    </PropertyContext.Provider>
  );
}

export default App;
