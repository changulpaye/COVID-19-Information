import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./components/common/Dashboard";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route path="/corona-infomation" component={Dashboard} />
          <Route path="/details/:countryname" component={CountryDetails} />
          <Redirect to="/corona-infomation" from="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
