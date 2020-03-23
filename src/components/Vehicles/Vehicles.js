import React, { useState, useEffect } from "react";
import VehicleList from "../VehicleList/VehicleList";

import MakesMenu from "../MakesMenu/MakesMenu";

const Vehicles = ({ match, history, location }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      const cachedVehicles = sessionStorage.getItem(
        `${match.params.make}:${location.search.split("?model=")[1]}`
      );
      if (cachedVehicles) setVehicles(JSON.parse(cachedVehicles));
      else {
        try {
          setLoading(true);
          const modelFromParams = location.search.split("?model=")[1];
          const res = await fetch(
            `http://localhost:8080/api/vehicles?make=${match.params.make}&model=${modelFromParams}`
          );
          const data = await res.json();
          setVehicles(data);
          setLoading(false);
          sessionStorage.setItem(
            `${match.params.make}:${location.search.split("?model=")[1]}`,
            JSON.stringify(data)
          );
        } catch (error) {
          console.log(error);
        }
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
