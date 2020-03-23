import React from "react";
import MakesMenu from "../MakesMenu/MakesMenu";
import mainStyles from "./Main.module.css";

const Main = ({ makes, history, location, match }) => {
  return (
    <div className={mainStyles.container}>
      <h2>Search By Make & Model</h2>
      <MakesMenu
        makes={makes}
        history={history}
        location={location}
        match={match}
      />
    </div>
  );
};

export default Main;
