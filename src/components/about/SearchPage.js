import React from "react";
import { connect } from "react-redux";
import * as wlanInfoActions from "../../redux/actions/wlanInfoActions.js";
import * as searchActions from "../../redux/actions/searchActions.js";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SearchForm from "./SearchForm";
//import Button from 'react-bootstrap/Button'

class SearchPage extends React.Component {
  componentDidMount() {
    if (this.props.wlanInfos.length === 0) {
      this.props.actions.loadwlanInfos().catch((error) => {
        alert("Loading loadwlanInfos failed " + error);
      });
    }
  }

  //variable to collect data
  category = "";
  title = "";

  onTextBoxChange(event) {
    if (event.target.name == "category") {
      this.category = event.target.value;
      console.log(this.category);
    }

    if (event.target.name == "title") {
      this.title = event.target.value;
      console.log(this.title);
    }
  }
  onSave() {
    alert(this.category); //remove after test
    this.props.actions
      .search({ category: this.category, title: this.title })
      .catch((error) => {
        alert("Loading loadwlanInfos failed " + error);
      });
    //ToDO: Create API function for this
    //Create component to show result
  }

  render() {
    return (
      <SearchForm
        onSave={this.onSave.bind(this)}
        onChange={this.onTextBoxChange.bind(this)}
      ></SearchForm>
      // here should be the result display component
    );
  }
}

SearchPage.propTypes = {
  wlanInfos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    wlanInfos: state.wlanInfos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadwlanInfos: bindActionCreators(wlanInfoActions.loadwlanInfo, dispatch),
      search: bindActionCreators(searchActions.search, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
