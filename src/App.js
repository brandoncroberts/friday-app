import React, { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Vehicles from "./components/Vehicles/Vehicles";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";

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
      <Layout>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Main {...props} makes={makes} />}
          />
          <Route path="/makes/:make" component={Vehicles} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
