import React, { useState } from "react";

const MakesMenu = ({ makes, history }) => {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/makes/${value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Choose a vehicle make
          <select onChange={handleChange} value={value}>
            <option value="Choose a make of car">Choose a make of car</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default MakesMenu;
