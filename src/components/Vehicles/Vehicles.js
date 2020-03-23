import React, { useState, useEffect } from "react";
import VehicleList from "../VehicleList/VehicleList";

import MakesMenu from "../MakesMenu/MakesMenu";
import ErrorMessage from '../ErrorMessage/ErrorMessage'


const Vehicles = ({ match, history, location }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false)

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
          setError(true)
          loading(false)
        }
      }
    };
    if (match.params.make && location.search.includes("model")) fetchVehicles();
  }, [match.params.make, location.search]);

  return (
    <div>
      <div>New {match.params.make} Vehicles for Sale</div>
      <MakesMenu history={history} location={location} match={match} />
      {
        error && <ErrorMessage message={"The request to our server for this vehicle data was unsuccessful. Please try again."} red/>
      }
      <VehicleList vehicles={vehicles} loading={loading} />

    </div>
  );
};

export default Vehicles;
