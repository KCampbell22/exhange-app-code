import React from "react";
import Footer from "./Footer";
import Home from "./Home";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Home />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
