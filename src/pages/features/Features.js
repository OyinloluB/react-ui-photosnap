import React from "react";
import Feature from "../../components/features/Feature";
import FeaturesObject from "./object/FeaturesObject";

import features from "../../assets/features/hero.jpg";

import Styles from "./features.module.scss";

const Features = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.container_lhs}>
          <div>
            <h2>Features</h2>
            <p>
              We make sure all of our features are designed to be loved by every
              aspiring and even professional photograpers who wanted to share
              their stories.
            </p>
          </div>
        </div>
        <div className={Styles.container_rhs}>
          <img src={features} alt="features-image" />
        </div>
      </div>
      <Feature features={FeaturesObject} />
    </div>
  );
};

export default Features;
