import React from "react";

import { useHistory } from "react-router-dom";

import CtaButton from "../../components/cta-button/ctaButton";

import Styles from "./footer.module.scss";

import logo from "../../assets/footer/logo.svg";
import facebook from "../../assets/footer/facebook.svg";
import youtube from "../../assets/footer/youtube.svg";
import twitter from "../../assets/footer/twitter.svg";
import pinterest from "../../assets/footer/pinterest.svg";
import instagram from "../../assets/footer/instagram.svg";
import arrow from "../../assets/footer/arrow-white.svg";

const Footer = () => {
  const history = useHistory();

  return (
    <div className={Styles.container}>
      <div className={Styles.container_lhs}>
        <div className={Styles.container_lhs_images}>
          <img src={logo} alt="logo" width="125" />
          <div>
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>
        <div className={Styles.container_lhs_nav}>
          <p onClick={() => history.push("/")}>Home</p>
          <p onClick={() => history.push("/stories")}>Stories</p>
          <p onClick={() => history.push("/features")}>Features</p>
          <p
            style={{
              paddingBottom: 0,
            }}
            onClick={() => history.push("/pricing")}
          >
            Pricing
          </p>
        </div>
      </div>
      <div className={Styles.container_rhs}>
        <CtaButton
          text="Get an invite"
          arrow={arrow}
          style={{ justifyContent: "center" }}
        />
        <p className={Styles.container_rhs_copyright}>
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
