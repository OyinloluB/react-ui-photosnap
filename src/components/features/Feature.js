import React from "react";

import Styles from "./feature.module.scss";

const Feature = ({ features }) => {
  return (
    <div className={Styles.container}>
      {features.items.map((item) => (
        <div className={Styles.container_content}>
          <div>
            <img src={item.image} alt="/" />
          </div>
          <div>
            <div>
              <p className={Styles.container_content_title}>{item.title}</p>
            </div>
            <div>
              <p className={Styles.container_content_text}>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
