import React from "react";
import MakesMenu from "../MakesMenu/MakesMenu";
import mainStyles from "./Main.module.css";

const Main = ({ makes, history }) => {
  return (
    <div className={mainStyles.container}>
      <h2>Search By Make & Model</h2>
      <MakesMenu makes={makes} history={history} />
    </div>
  );
};

export default Main;
