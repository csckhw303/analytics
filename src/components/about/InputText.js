import React from "react";
//import Form from 'react-bootstrap/Form'

//import "./App.css";

const InputText = (props) => {
  const result =
    props.data.length > 0 ? (
      <div className={props.wrapperClass}>
        <label htmlFor={props.name}>{props.label}</label>
        <div className="field">
          <input
            type="text"
            name={props.name}
            className="form-control"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      </div>
    ) : (
      <div className="App"></div>
    );

  return result;
};

export default InputText;
