import React from "react";
import layoutStyles from "./Layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
