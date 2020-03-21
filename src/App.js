import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
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

  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
}

export default App;
