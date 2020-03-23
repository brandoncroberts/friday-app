import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import headerStyles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className={headerStyles.container}>
      <Link to="/">
        <Logo className={headerStyles.logo} />
      </Link>
      <nav className={headerStyles.nav}>
        <ul className={`${showMenu ? headerStyles.show : ""}`}>
          <li className={headerStyles.item}>makes</li>
          <li className={headerStyles.item}>models</li>
          <li className={headerStyles.item}>vehicles</li>
          <li className={headerStyles.item}>compare</li>
        </ul>
      </nav>
      <div className={headerStyles.rightMenu}>
        <div className={headerStyles.favorites}>&#x2661;</div>
        <div className={`${headerStyles.menu} `} onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </div>
  );
};

export default Header;
