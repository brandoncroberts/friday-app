import React from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Vehicles from "./components/Vehicles/Vehicles";
import Main from "./components/Main/Main";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact render={props => <Main {...props} />} />
          <Route
            path="/makes/:make"
            render={props => <Vehicles {...props} />}
          />
          <Route path="/" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
