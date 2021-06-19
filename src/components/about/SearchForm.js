import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const SearchForm = ({ onSave, onChange, wLanOptions, onTypeaheadChange }) => {
  const [multiSelections, setMultiSelections] = useState([]);
  var wlanoptions = wLanOptions;
  var chipsetoptions = [];
  function handleChange(event) {
    onTypeaheadChange({ name: "wlen", value: event });
    setMultiSelections(event);
  }
  return (
    <form onSubmit={onSave}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>WLEN</label>
              <Typeahead
                id="wlan_typeahead"
                labelKey="wlan"
                multiple
                onChange={handleChange}
                options={wlanoptions}
                placeholder="Choose wlen..."
                selected={multiSelections}
              />
            </td>
            <td>
              <label>WLEN</label>
              <Typeahead
                id="chip_set"
                labelKey="wlen"
                multiple
                options={chipsetoptions}
                placeholder="Choose wlen..."
              ></Typeahead>
            </td>
          </tr>
          <tr>
            <td>
              <TextInput name="category" label="Category" onChange={onChange} />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  wLanOptions: PropTypes.array,
  onTypeaheadChange: PropTypes.func,
};

export default SearchForm;
