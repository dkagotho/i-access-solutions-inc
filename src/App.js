import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/OurServices";
import OurServices from "./components/pages/OurServices";
import OurPartners from "./components/pages/OurPartners";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/our-services" component={OurServices} />
          <Route path="/our-partners" component={OurPartners} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
