import React from "react";
import VehicleCard from "../VehicleCard/VehicleCard";

const VehicleList = ({ vehicles, loading }) => {
  if (loading) {
    return <div>Loading.....</div>;
  }

  return (
    <div>
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

export default VehicleList;
