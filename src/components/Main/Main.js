import React from "react";
import MakesMenu from "../MakesMenu/MakesMenu";
import mainStyles from "./Main.module.css";

const Main = ({ history, location, match }) => {
  return (
    <div className={mainStyles.container}>
      <h2>Search By Make & Model</h2>
      <MakesMenu history={history} location={location} match={match} />
    </div>
  );
};

export default Main;
