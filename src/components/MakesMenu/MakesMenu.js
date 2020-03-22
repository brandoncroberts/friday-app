import React, { useState } from "react";

const MakesMenu = ({ makes, history }) => {
  const [value, setValue] = useState("Choose a make of car");

  const handleChange = event => {
    console.log("MakesMenu -> event.target.value", event.target.value);
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
            {makes.map(make => (
              <option key={make} value={make}>
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
