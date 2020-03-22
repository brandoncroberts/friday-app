import React from "react";

const VehicleCard = ({ data }) => {
  return (
    <div>
      <h1>
        {data.make} {data.model}
      </h1>
      <div>
        Power:
        <p>{data.enginePowerPS}</p>
        <p>{data.enginePowerKW}</p>
      </div>

      <p>Fuel Type: {data.fuelType}</p>
      <p>Body: {data.bodyType}</p>
      <p>Engine Capacity: {data.engineCapacity}</p>
    </div>
  );
};

export default VehicleCard;
