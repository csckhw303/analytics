import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
//https://github.com/ericgio/react-bootstrap-typeahead

const SearchForm = ({ onSave, onChange, wLanOptions, chipsetOptions, onTypeaheadChange }) => {
  const [multiSelections, setMultiSelections] = useState([]);
  const [multiSelectionsForChipset, setMultiSelectionsForChipset] = useState([]);
  var wlanoptions = wLanOptions;
  var chipsetoptions = chipsetOptions;
  function handleChangeForChipset(event) {
    onTypeaheadChange({ name: "chipset", value: event });
    setMultiSelectionsForChipset(event);
  }
  function handleChange(event) {
    onTypeaheadChange({ name: "wlan", value: event });
    setMultiSelections(event);
  }
  return (
    <form onSubmit={onSave}>
      <table>
        <tbody>
          <tr>
            <td>
              <label>wlan</label>
              <Typeahead
                id="wlan_typeahead"
                labelKey="wlan"
                multiple
                onChange={handleChange}
                options={wlanoptions}
                placeholder="Choose wlan..."
                selected={multiSelections}
              />
            </td>
            <td>
              <label>chipset</label>
              <Typeahead
                id="chip_set"
                labelKey="chipset"
                multiple
                onChange={handleChangeForChipset}
                options={chipsetoptions}
                placeholder="Choose chipset..."
                selected={multiSelectionsForChipset}
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
  chipsetOptions: PropTypes.array,
  onTypeaheadChange: PropTypes.func,
};

export default SearchForm;
