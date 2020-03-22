import React from "react";

const Vehicles = ({ match }) => {
  return <div>New {match.params.make} Vehicles for Sale</div>;
};

export default Vehicles;
