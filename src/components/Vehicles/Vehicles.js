import React, { useState, useEffect } from "react";
import VehicleList from "../VehicleList/VehicleList";

import MakesMenu from "../MakesMenu/MakesMenu";

const Vehicles = ({ match, history, makes, location }) => {
  const [models, setModels] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [modelInputValue, setModelInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.search.includes("model")) {
      setModelInputValue(location.search.split("?model=")[1]);
    }
    const fetchModels = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/api/models?make=${match.params.make}`
        );
        const data = await res.json();
        setModels(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchModels();
  }, [match.params.make, location.search]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:8080/api/vehicles?make=${match.params.make}&model=${modelInputValue}`
        );
        const data = await res.json();
        setVehicles(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (modelInputValue) fetchVehicles();
  }, [modelInputValue, match.params.make]);

  const handleModelChange = event => {
    setModelInputValue(event.target.value);
  };

  const handleMakeChange = event => {
    setModelInputValue("");
    setVehicles([]);
    history.push(`/makes/${event.target.value}`);
  };

  return (
    <div>
      <div>New {match.params.make} Vehicles for Sale</div>

      <MakesMenu
        makes={makes}
        history={history}
        location={location}
        match={match}
      />
      <VehicleList vehicles={vehicles} loading={loading} />
    </div>
  );
};

export default Vehicles;
