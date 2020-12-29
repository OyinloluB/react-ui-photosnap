import React from "react";

import responsiveness from "../../../assets/features/responsive.svg";
import limit from "../../../assets/features/no-limit.svg";
import embed from "../../../assets/features/embed.svg";
import domain from "../../../assets/features/custom-domain.svg";
import exposure from "../../../assets/features/boost-exposure.svg";
import drag from "../../../assets/features/drag-drop.svg";

const FeaturesObject = {
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
    {
      image: domain,
      title: "Custom Domain",
      content:
        "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      image: exposure,
      title: "Boost Your Exposure",
      content:
        "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      image: drag,
      title: "Drag & Drop Image",
      content:
        "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ],
};

export default FeaturesObject;
