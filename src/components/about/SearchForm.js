import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

//import SelectInput from "../common/SelectInput";

const SearchForm = ({ onSave, onChange, saving = false, errors = {} }) => {
  return (
    <form onSubmit={onSave}>
      <table>
        <tbody>
          <tr>
            <td>
              <TextInput
                name="title"
                label="Title"
                onChange={onChange}
                error={errors.title}
              />
            </td>
            <td>
              <TextInput
                name="category"
                label="Category"
                onChange={onChange}
                error={errors.category}
              />
            </td>
            <td>
              <TextInput
                name="category2"
                label="Category2"
                onChange={onChange}
                error={errors.category}
              />
            </td>
            <td>
              <TextInput
                name="category3"
                label="Category3"
                onChange={onChange}
                error={errors.category}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <button type="submit" disabled={saving} className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default SearchForm;
