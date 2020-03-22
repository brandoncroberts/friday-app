import React, { useState } from "react";

const MakesMenu = ({ makes, history }) => {
  const [value, setValue] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  const handleChange = event => {
    setValue(event.target.value);
    fetchModels(event.target.value);
  };

  const handleModelChange = event => {
    setModel(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value && model) {
      history.push(`/makes/${value}?model=${model}`);
    } else if (value) {
      history.push(`/makes/${value}`);
    }
  };

  const fetchModels = async make => {
    try {
      const res = await fetch(`http://localhost:8080/api/models?make=${make}`);
      const data = await res.json();
      setModels(data);
    } catch (error) {
      console.log(error);
    }
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

        <label>
          Choose a vehicle model
          <select
            onChange={handleModelChange}
            value={model}
            disabled={value ? false : true}
          >
            <option value={"Select a model"}>{"Select a model"}</option>
            {models.map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Search" disabled={value ? false : true} />
      </form>
    </div>
  );
};

export default MakesMenu;
