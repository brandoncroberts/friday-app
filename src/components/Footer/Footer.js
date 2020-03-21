import React from "react";
import footerStyles from "./Footer.module.css";
import GithubLogo from "../../assets/github.png";

const Footer = () => {
  return (
    <nav className={footerStyles.nav}>
      <div>&#169;CarFinder 2020</div>
      <a href="https://github.com/8brandon">
        <img src={GithubLogo} alt="" className={footerStyles.logo} />
      </a>

      <div>Friday Coding Challenge</div>
    </nav>
  );
};

export default Footer;
