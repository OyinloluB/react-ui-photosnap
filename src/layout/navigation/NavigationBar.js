import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../../components/button/Button";

import logo from "../../assets/navigation-bar/logo.svg";
import hamburger from "../../assets/navigation-bar/hamburger.svg";
import close from "../../assets/navigation-bar/close.svg";

import Styles from "./navigationbar.module.scss";
import { Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divider: {
    background: "#979797",
    margin: "0 0 3vh 0",
    width: "300px",
    mixBlendMode: "normal",
    opacity: 0.25,
  },
}));

const NavigationBar = ({ sidebar, setSidebar }) => {
  const history = useHistory();
  const classes = useStyles();

  const navLinks = {
    items: [
      { name: "Stories", route: "/stories" },
      { name: "Features", route: "/features" },
      { name: "Pricing", route: "/pricing" },
    ],
  };

  return (
    <>
      <div className={Styles.container}>
        <div>
          <img
            src={logo}
            alt="Photosnap-logo"
            width="140"
            onClick={() => history.push("/")}
          />
        </div>
        <div className={Styles.dsktp_nav}>
          <ul>
            {navLinks.items.map((item) => (
              <li>
                <Link to={`${item.route}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={Styles.dsktp_nav_button}>
          <Button text="Get an invite" secondary={false} />
        </div>
        <div className={Styles.hamburger}>
          {sidebar ? (
            <img
              src={close}
              alt="close-menu"
              width="20"
              onClick={() => setSidebar(false)}
            />
          ) : (
            <img
              src={hamburger}
              alt="hamburger-menu"
              width="30"
              onClick={() => setSidebar(true)}
            />
          )}
        </div>
      </div>
      {sidebar && (
        <div className={Styles.mobile_nav}>
          {navLinks.items.map((item) => (
            <li>
              <Link to={`${item.route}`}>{item.name}</Link>
            </li>
          ))}
          <Divider classes={{ root: classes.divider }} />
          <Button text="Get an invite" secondary={false} />
        </div>
      )}
    </>
  );
};

export default NavigationBar;
