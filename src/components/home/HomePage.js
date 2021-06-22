import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Analytics page</h1>
    <p>Check out the pattern of data</p>
    <Link to="search" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
