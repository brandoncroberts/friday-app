import React, { useState, useEffect } from "react";
import VehicleList from "../VehicleList/VehicleList";

const Vehicles = ({ match, history, makes }) => {
  const [models, setModels] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [modelInputValue, setModelInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
  }, [match.params.make]);

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
      <form>
        <label>
          Make:
          <select onChange={handleMakeChange} value={match.params.make}>
            <option value={match.params.make}>{match.params.make}</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>
        </label>
        <label>
          Choose a vehicle model
          <select onChange={handleModelChange} value={modelInputValue}>
            <option value={"Select a model"}>{"Select a model"}</option>

            {models.map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </label>
      </form>

      <VehicleList vehicles={vehicles} loading={loading} />
    </div>
  );
};

export default Vehicles;
