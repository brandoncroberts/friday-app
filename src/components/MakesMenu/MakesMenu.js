import React, { useState, useEffect } from "react";
import makesMenuStyles from "./MakesMenu.module.css";

const MakesMenu = ({ history, match, location }) => {
  const [make, setMake] = useState("");
  const [makes, setMakes] = useState([]);
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchMakes = async () => {
      const cachedMakes = sessionStorage.getItem("makes");
      if (cachedMakes) setMakes(JSON.parse(cachedMakes));
      else {
        try {
          const res = await fetch("http://localhost:8080/api/makes");
          const data = await res.json();
          console.log("fetchMakes -> data", data);
          setMakes(data);
          sessionStorage.setItem("makes", JSON.stringify(data));
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchMakes();
  }, []);

  const fetchModels = async make => {
    const cachedModels = sessionStorage.getItem(`models:${make}`);
    if (cachedModels) setModels(JSON.parse(cachedModels));
    else {
      try {
        const res = await fetch(
          `http://localhost:8080/api/models?make=${make}`
        );
        const data = await res.json();
        setModels(data);
        sessionStorage.setItem(`models:${make}`, JSON.stringify(data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (match.params.make) {
      setMake(match.params.make);
      fetchModels(match.params.make);
    }
    if (location.search.includes("model")) {
      setModel(location.search.split("?model=")[1]);
    }
  }, [location.search, match.params.make]);

  const handleMakeChange = event => {
    setMake(event.target.value);
    setModels([]);
    fetchModels(event.target.value);
  };

  const handleModelChange = event => {
    setModel(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (make && model) {
      history.push(`/makes/${make}?model=${model}`);
    } else if (make) {
      history.push(`/makes/${make}`);
    }
  };

  return (
    <div className={makesMenuStyles.container}>
      <form className={makesMenuStyles.form} onSubmit={handleSubmit}>
        <select onChange={handleMakeChange} value={make}>
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
          disabled={make ? false : true}
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
          disabled={make && model ? false : true}
        />
      </form>
    </div>
  );
};

export default MakesMenu;
