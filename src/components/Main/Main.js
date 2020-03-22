import React from "react";
import MakesMenu from "../MakesMenu/MakesMenu";
import mainStyles from "./Main.module.css";

const Main = ({ makes, history }) => {
  return (
    <div className={mainStyles.container}>
      <MakesMenu makes={makes} history={history} />
    </div>
  );
};

export default Main;
