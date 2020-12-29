import React from "react";

import imageOne from "../../../assets/home/create-and-share.jpg";
import imageTwo from "../../../assets/home/beautiful-stories.jpg";
import imageThree from "../../../assets/home/designed-for-everyone.jpg";

import arrowWhite from "../../../assets/ctaButton/arrow-white.svg";
import arrowBlack from "../../../assets/ctaButton/arrow-black.svg";

const Sections = {
  items: [
    {
      heading: "Create and share your photo stories.",
      text:
        "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      image: imageOne,
      cta: "Get an invite",
      arrow: arrowWhite,
      background: "#000000",
      color: "#fff",
      inverse: false,
    },
    {
      heading: "Beautiful stories every time",
      text:
        "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      image: imageTwo,
      cta: "View the stories",
      arrow: arrowBlack,
      background: "#fff",
      color: "#000000",
      inverse: true,
    },
    {
      heading: "Designed for everyone",
      text:
        "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it. ",
      image: imageThree,
      cta: "View the stories",
      arrow: arrowBlack,
      background: "#fff",
      color: "#000000",
      inverse: false,
    },
  ],
};

export default Sections;
