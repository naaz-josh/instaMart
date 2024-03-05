import Footer from "../footer/Footer";
import Header from "../header/Header";
import Router from "../../routers/Router";

import React from "react";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div>
        <Router></Router>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
