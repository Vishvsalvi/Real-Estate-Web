import React from "react";

const Button = ({children}) => {
  return (
    <button className="mr-5  md:block px-6 py-2 text-white rounded md:ml-8 hover:bg-blue-700 duration-150 bg-blue-600 font-semibold" >
     {children}
    </button>
  );
};

export default Button;
