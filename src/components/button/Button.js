import React from "react";

import Styles from "./button.module.scss";

const Button = ({ text, background, secondary }) => {
  let useStyle = {
    backgroundColor: "#000000",
    border: "1px solid #000000",
    color: "#ffff",
  };

  if (secondary) {
    useStyle = {
      backgroundColor: `${background}`,
      color: "#000000",
      border: `1px solid ${background}`,
    };
  }
  return (
    <div>
      <button style={useStyle}>{text}</button>
    </div>
  );
};

export default Button;
