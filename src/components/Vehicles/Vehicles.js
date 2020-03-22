import React, { useState, useEffect } from "react";
import VehicleCard from "../VehicleCard/VehicleCard";

const Vehicles = ({ match }) => {
  const [models, setModels] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [modelInputValue, setModelInputValue] = useState("");

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
        const res = await fetch(
          `http://localhost:8080/api/vehicles?make=${match.params.make}&model=${modelInputValue}`
        );
        const data = await res.json();
        setVehicles(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (modelInputValue) fetchVehicles();
  }, [modelInputValue, match.params.make]);

  const handleChange = event => {
    setModelInputValue(event.target.value);
  };

  return (
    <div>
      <div>New {match.params.make} Vehicles for Sale</div>
      <form>
        <label>
          Choose a vehicle make
          <select onChange={handleChange} value={modelInputValue}>
            <option value={"Select a model"}>{"Select a model"}</option>

            {models.map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </label>
      </form>
      {vehicles.length ? (
        <div>
          Vehicles:
          {vehicles.map((vehicle, index) => (
            <VehicleCard data={vehicle} key={index} />
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Vehicles;
