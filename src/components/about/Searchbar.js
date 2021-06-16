import React from "react";
import Form from 'react-bootstrap/Form'

//import "./App.css";

const Searchbar = (props) => {
  const result =
    props.data.length > 0 ? (
      <Form>
        <Form.Group controlId="form">
        <Form.Label>{props.title}</Form.Label>
        <Form.Control type="wlan" placeholder="Enter keyword" />
        </Form.Group>
      </Form>
    ) : (
      <div className="App"></div>
    );

  return result;
};

export default Searchbar;
