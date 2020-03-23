import React, { useState, useEffect } from "react";
import VehicleList from "../VehicleList/VehicleList";

import MakesMenu from "../MakesMenu/MakesMenu";

const Vehicles = ({ match, history, location }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const modelFromParams = location.search.split("?model=")[1];
        const res = await fetch(
          `http://localhost:8080/api/vehicles?make=${match.params.make}&model=${modelFromParams}`
        );
        const data = await res.json();
        setVehicles(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (match.params.make && location.search.includes("model")) fetchVehicles();
  }, [match.params.make, location.search]);

  return (
    <div>
      <div>New {match.params.make} Vehicles for Sale</div>
      <MakesMenu history={history} location={location} match={match} />
      <VehicleList vehicles={vehicles} loading={loading} />
    </div>
  );
};

export default Vehicles;
