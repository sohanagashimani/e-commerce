import React from "react";

const Button = ({ buttonText, ...rest }) => {
  return (
    <button
      className="border rounded-md text-lg font-medium px-2 mr-2 hover:bg-gray-200"
      {...rest}
    >
      {buttonText}
    </button>
  );
};

export default Button;
