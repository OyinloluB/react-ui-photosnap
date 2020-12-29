import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import CtaFooter from "../layout/ctaFooter/CtaFooter";
import Footer from "../layout/footer/Footer";

import NavigationBar from "../layout/navigation/NavigationBar";
import Features from "../pages/features/Features";
import Home from "../pages/home/Home";
import Pricing from "../pages/pricing/Pricing";
import Stories from "../pages/stories/Stories";

const Main = () => {
  const location = useLocation();

  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setSidebar(false);
  }, []);

  return (
    <div>
      <NavigationBar sidebar={sidebar} setSidebar={setSidebar} />
      <Route exact path="/" component={Home} />
      <Route path="/stories" component={Stories} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      {location.pathname === "/features" && <CtaFooter />}
      {location.pathname === "/pricing" && <CtaFooter />}
      <Footer />
    </div>
  );
};

export default Main;
