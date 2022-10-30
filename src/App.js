import React from "react";
import { useReducer } from "react";
import "./App.css";
import Body from "./Components/Body";
import ProductDisplay from "./Components/ProductDisplay";
import { propertyData } from "./data";

// Creating Context to pass data in all the components
export const PropertyContext = React.createContext(); 

function App() {
  function reducer(state, action) { // 

    if (action.type === "SEARCH") {
      console.log("Working...");
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


 // Filtering location

  function filter(location){
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
    <PropertyContext.Provider value={{ propertyData, state, filter, newSearch }}> 
      <Body />
      <ProductDisplay />
    </PropertyContext.Provider>
  );
}

export default App;
