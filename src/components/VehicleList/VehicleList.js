import React, { useState } from "react";
import VehicleCard from "../VehicleCard/VehicleCard";
import Pagination from "../Pagination/Pagination";

import vehicleListStyles from "./VehicleList.module.css";

const VehicleList = ({ vehicles, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage] = useState(20);

  if (loading) {
    return <div>Loading.....</div>;
  }

  const lastVehicle = currentPage * vehiclesPerPage;
  const firstVehicle = lastVehicle - vehiclesPerPage;
  const currentVehicles = vehicles.slice(firstVehicle, lastVehicle);

  const paginationHandler = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={vehicleListStyles.container}>
      {vehicles.length === 0 ? (
        <section className={vehicleListStyles.message}>
          No vehicles found
        </section>
      ) : (
        <section>
          {currentVehicles.map((vehicle, index) => (
            <VehicleCard data={vehicle} key={index} />
          ))}
        </section>
      )}

      <Pagination
        itemsPerPage={vehiclesPerPage}
        totalItems={vehicles.length}
        paginationHandler={paginationHandler}
        currentPage={currentPage}
      />
    </div>
  );
};

export default VehicleList;
