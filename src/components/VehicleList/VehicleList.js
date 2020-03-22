import React, { useState } from "react";
import VehicleCard from "../VehicleCard/VehicleCard";

const VehicleList = ({ vehicles, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage, setVehiclesPerPage] = useState(20);

  if (loading) {
    return <div>Loading.....</div>;
  }

  const lastVehicle = currentPage * vehiclesPerPage;
  const firstVehicle = lastVehicle - vehiclesPerPage;
  const currentVehicles = vehicles.slice(firstVehicle, lastVehicle);

  return (
    <div>
      {vehicles.length ? (
        <div>
          Vehicles:
          {currentVehicles.map((vehicle, index) => (
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
