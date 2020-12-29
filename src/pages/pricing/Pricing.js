import React from "react";

import pricing from "../../assets/pricing/hero.jpg";

import Styles from "./pricing.module.scss";

const Pricing = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.container_lhs}>
          <div>
            <h2>Pricing</h2>
            <p>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </p>
          </div>
        </div>
        <div className={Styles.container_rhs}>
          <img src={pricing} alt="pricing-image" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
