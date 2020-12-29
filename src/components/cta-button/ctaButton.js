import React from "react";

import Styles from "./ctaButton.module.scss";

const ctaButton = ({ text, arrow, style }) => {
  return (
    <div className={Styles.container} style={style}>
      <p>{text}</p>
      <img src={arrow} alt={text} />
    </div>
  );
};

export default ctaButton;
