import React from "react";
import CtaButton from "../../components/cta-button/ctaButton";
import Sections from "./object/DummyObject";

import Styles from "./home.module.scss";
import Card from "../../components/cards/Card";
import Feature from "../../components/features/Feature";

// Card images
import mountains from "../../assets/cards/mountains.jpg";
import cityscapes from "../../assets/cards/cityscapes.jpg";
import voyage from "../../assets/cards/voyage.jpg";
import architecturals from "../../assets/cards/architecturals.jpg";

// Feature images
import responsiveness from "../../assets/features/responsive.svg";
import limit from "../../assets/features/no-limit.svg";
import embed from "../../assets/features/embed.svg";

// Card object
const Cards = {
  items: [
    {
      image: mountains,
      title: "The mountains",
      author: "John appleseed",
    },
    {
      image: cityscapes,
      title: "Sunset cityscapes",
      author: "Benjamin cruz",
    },
    {
      image: voyage,
      title: "18 days voyage",
      author: "Alexei borodin",
    },
    {
      image: architecturals,
      title: "Architecturals",
      author: "Samantha brooke",
    },
  ],
};

// Feature object
const Features = {
  items: [
    {
      image: responsiveness,
      title: "100% responsive",
      content:
        "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      image: limit,
      title: "No photo upload limit",
      content:
        "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      image: embed,
      title: "Available to embed",
      content:
        "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    },
  ],
};

const Home = () => {
  return (
    <div>
      {Sections.items.map((item) => (
        <>
          {item.inverse === false ? (
            <div className={Styles.container}>
              <div
                className={Styles.container_lhs}
                style={{
                  backgroundColor: `${item.background}`,
                  color: `${item.color}`,
                }}
              >
                <div>
                  <h2>{item.heading}</h2>
                  <p>{item.text}</p>
                </div>
                <CtaButton text={item.cta} arrow={item.arrow} />
              </div>
              <div className={Styles.container_rhs}>
                <img src={item.image} alt={item.text} />
              </div>
            </div>
          ) : (
            <div className={Styles.inverse_container}>
              <div className={Styles.container_rhs}>
                <img src={item.image} alt={item.text} />
              </div>
              <div
                className={Styles.container_lhs}
                style={{
                  backgroundColor: `${item.background}`,
                  color: `${item.color}`,
                }}
              >
                <div>
                  <h2>{item.heading}</h2>
                  <p>{item.text}</p>
                </div>
                <CtaButton text={item.cta} arrow={item.arrow} />
              </div>
            </div>
          )}
        </>
      ))}
      <Card Cards={Cards} />
      <Feature features={Features} />
    </div>
  );
};

export default Home;
