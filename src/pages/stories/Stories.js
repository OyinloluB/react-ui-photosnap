import React from "react";
import Card from "../../components/cards/Card";
import AllStories from "./object/StoriesObject";

import CtaButton from "../../components/cta-button/ctaButton";

import Styles from "./stories.module.scss";

import hero from "../../assets/cards/moon.jpg";
import heroMobile from "../../assets/cards/moon-dsktp.jpg";
import arrow from "../../assets/ctaButton/arrow-white.svg";

const Stories = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.container_hero}>
        <img src={hero} alt="hero" className={Styles.container_hero_image} />
        <img
          src={heroMobile}
          alt="hero"
          className={Styles.container_hero_imageMobile}
        />
        <div className={Styles.container_content}>
          <div>
            <h5>LAST MONTH’S FEATURED STORY</h5>
            <h1 className={Styles.container_content_title}>
              HAZY FULL MOON OF APPALACHIA
            </h1>
            <p className={Styles.container_content_details}>
              March 2nd 2020{" "}
              <span style={{ color: "#fff" }}>by John appleseed</span>
            </p>
            <p className={Styles.container_content_description}>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <CtaButton text="Read the story" arrow={arrow} />
          </div>
        </div>
      </div>
      <div className={Styles.container_content_mobile}>
        <div>
          <h5>LAST MONTH’S FEATURED STORY</h5>
          <h1 className={Styles.container_content_title}>
            HAZY FULL MOON OF APPALACHIA
          </h1>
          <p className={Styles.container_content_details}>
            March 2nd 2020{" "}
            <span style={{ color: "#fff" }}>by John appleseed</span>
          </p>
          <p className={Styles.container_content_description}>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <CtaButton text="Read the story" arrow={arrow} />
        </div>
      </div>
      <Card Cards={AllStories} />
    </div>
  );
};

export default Stories;
