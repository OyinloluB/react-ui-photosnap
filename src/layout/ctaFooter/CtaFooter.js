import React from "react";
import CtaButton from "../../components/cta-button/ctaButton";

import arrow from "../../assets/ctaButton/arrow-white.svg";

import Styles from "./ctafooter.module.scss";

const CtaFooter = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.container_wrapper}>
        <h2>We’re in beta. Get your invite today!</h2>
        <div className={Styles.container_wrapper_dsktp}>
          <CtaButton
            text="Get an invite"
            arrow={arrow}
            style={{ justifyContent: "center" }}
          />
        </div>
        <div className={Styles.container_wrapper_mobile}>
          <CtaButton text="Get an invite" arrow={arrow} />
        </div>
      </div>
    </div>
  );
};

export default CtaFooter;
