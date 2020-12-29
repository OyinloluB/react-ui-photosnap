import React from "react";
import CtaButton from "../cta-button/ctaButton";
import { Divider, makeStyles } from "@material-ui/core";

import Styles from "./card.module.scss";

import arrow from "../../assets/ctaButton/arrow-white.svg";

const useStyles = makeStyles((theme) => ({
  divider: {
    background: "#fff",
    margin: "3vh 0",
    width: "220px",
    mixBlendMode: "normal",
    opacity: 0.25,
  },
}));

const Card = ({ Cards }) => {
  const classes = useStyles();

  return (
    <div className={Styles.container}>
      {Cards.items.map((item) => (
        <div>
          <div className={Styles.container_image}>
            <img
              src={item.image}
              alt="/"
              className={Styles.container_image_stories}
            />
            <div className={Styles.container_content}>
              <div>
                {item.date && <span>{item.date}</span>}
                <p className={Styles.container_content_title}>{item.title}</p>
                <span>by {item.author}</span>
                <Divider classes={{ root: classes.divider }} />
                <CtaButton
                  text="Read story"
                  arrow={arrow}
                  style={{ justifyContent: "space-between" }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
