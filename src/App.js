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


  function advancedFilter(advancedLocation, advancedFurnish, advancedPrice){

    let filteredData = propertyData;

      if(advancedLocation==="Any Location"){
        filteredData = filteredData.filter((element)=>{
          return element.location !== advancedLocation;
        })
      }else{
        filteredData = filteredData.filter((element)=>{
          return element.location === advancedLocation;
        })

      }

      if(advancedFurnish ==="Furnish Type"){
        filteredData = filteredData.filter((element)=>{
          return element.furnish_type !== advancedFurnish;
        })
      }else{
        filteredData = filteredData.filter((element)=>{
          return element.furnish_type === advancedFurnish;
        })

      }

      if(advancedPrice ==="Any Price"){
        filteredData = filteredData.filter((element)=>{
          return element.price !== advancedPrice;
        })
      }else{
        switch (advancedPrice) {
          case "5000-10000":filteredData = filteredData.filter((element)=>{
            return element.price >= 5000 && element.price <= 10000
          })
            break;
          case "10000-15000":filteredData = filteredData.filter((element)=>{
            return element.price >= 10000 && element.price <= 15000
          })
            break;
          case "15000-20000":filteredData = filteredData.filter((element)=>{
            return element.price >= 15000 && element.price <= 20000
          })
            break;
          case "20000-25000":filteredData = filteredData.filter((element)=>{
            return element.price >= 20000 && element.price <= 25000
          })
            break;
        
          default:
            break;
        }
      }

      console.log(filteredData)
      dispatch({ type:"SEARCH", payload:filteredData })
    
  }


  return (
    <PropertyContext.Provider value={{ propertyData, state, newSearch,advancedFilter }}> 
      <Body />
      <ProductDisplay />
    </PropertyContext.Provider>
  );
}

export default App;
