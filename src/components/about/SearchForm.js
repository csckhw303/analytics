import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const SearchForm = ({ onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <table>
        <tbody>
          <tr>
            <td>
              <TextInput name="title" label="Title" onChange={onChange} />
            </td>
            <td>
              <TextInput name="category" label="Category" onChange={onChange} />
            </td>
            <td>
              <TextInput
                name="category2"
                label="Category2"
                onChange={onChange}
              />
            </td>
            <td>
              <TextInput
                name="category3"
                label="Category3"
                onChange={onChange}
              />
            </td>
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
};

export default SearchForm;
