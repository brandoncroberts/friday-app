import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";

function App() {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    fetchMakes();
  }, []);

  const fetchMakes = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/makes");
      const data = await res.json();
      setMakes(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <Layout></Layout>;
}

export default App;
