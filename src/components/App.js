import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import SearchPage from "./about/SearchPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ChartsPage from "./chart/ChartsPage";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={SearchPage} />
        <Route path="/chart" component={ChartsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
