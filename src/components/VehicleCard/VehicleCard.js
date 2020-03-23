import React from "react";
import vehicleCardStyles from "./VehicleCard.module.css";

const VehicleCard = ({ data }) => {
  const vehicleImages = require("../../assets/vehicle-images.json");
  const image = vehicleImages[`${data.make}:${data.model}`]
    ? vehicleImages[`${data.make}:${data.model}`]
    : vehicleImages.fallback;

  return (
    <div className={vehicleCardStyles.container}>
      <img src={image} alt="vehicle" className={vehicleCardStyles.image} />
      <section>
        <h4>
          {data.make} {data.model}
        </h4>
        <div className={vehicleCardStyles.stats}>
          <p>
            <b>Engine Power PS:</b> {data.enginePowerPS}
          </p>
          <p>
            <b>Engine Power KW:</b> {data.enginePowerKW}
          </p>
          <p>
            <b>Fuel Type:</b> {data.fuelType}
          </p>
          <p>
            <b>Body:</b> {data.bodyType}
          </p>
          <p>
            <b>Engine Capacity:</b> {data.engineCapacity}
          </p>
        </div>

        <button className={vehicleCardStyles.button}>Add to Wish List</button>
      </section>
    </div>
  );
};

export default VehicleCard;
