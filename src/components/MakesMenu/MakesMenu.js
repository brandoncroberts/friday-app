import React, { useState, useEffect } from "react";
import makesMenuStyles from "./MakesMenu.module.css";
const MakesMenu = ({ history, match, location }) => {
  const [value, setValue] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/makes");
        const data = await res.json();
        setMakes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMakes();
  }, []);

  useEffect(() => {
    if (match.params.make) {
      setValue(match.params.make);
      fetchModels(match.params.make);
    }
    if (location.search.includes("model")) {
      setModel(location.search.split("?model=")[1]);
    }
  }, [location.search, match.params.make]);

  const handleMakeChange = event => {
    setValue(event.target.value);
    setModels([]);
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
    <div className={makesMenuStyles.container}>
      <form className={makesMenuStyles.form} onSubmit={handleSubmit}>
        <select onChange={handleMakeChange} value={value}>
          <option value="">Choose a make of car</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>

        <select
          onChange={handleModelChange}
          value={model}
          disabled={value ? false : true}
        >
          <option value={""}>{"Select a model"}</option>
          {models.map(model => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
        <input
          className={makesMenuStyles.submit}
          type="submit"
          value="Search"
          disabled={value && model ? false : true}
        />
      </form>
    </div>
  );
};

export default MakesMenu;
