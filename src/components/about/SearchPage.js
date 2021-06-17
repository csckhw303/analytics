import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as wlanInfoActions from "../../redux/actions/wlanInfoActions.js";
import * as searchActions from "../../redux/actions/searchActions.js";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SearchForm from "./SearchForm";

//I've changed this component from class to function
//There are two types of components exist. One is class component and the other is functional component
//But class component is getting retired now. So new feature can not be used in class component
//But it still is being used in many projects, so it needs to be understood.
//But useEffect or useState can not be used.
const SearchPage = (props) => {
  //I am using react state here not redux state for collecting the criteria value for the search
  const [criteria, setCriteria] = useState({ category: "", title: "" }); //this will start react local variable with convenient "setCategory" as update function

  //it is simailar as componentDidMount. syntax is little different
  useEffect(() => {
    if (props.wlanInfos.length === 0) {
      props.actions.loadwlanInfos().catch((error) => {
        alert("Loading loadwlanInfos failed " + error);
      });
    }
  }, []);

  //collect criteria from form component
  function onTextBoxChange(event) {
    const { name, value } = event.target; //destructure event.target and only use two attribute
    setCriteria((criteriaObject) => ({
      ...criteriaObject, //... means  spread out the attribute of the class title: dd , category: aaa
      [name]: value, //  in this line name can be title or category depending on which input box user is typeing
      //  if there is the same attribute on left side (...criteriaObject), it would be replaced.
      //  if no same then it will be merged into the object, then set with new object
    }));
  }
  function onSave() {
    alert(criteria.title + " " + criteria.category); //remove after test
    props.actions.search(criteria).catch((error) => {
      alert("Loading loadwlanInfos failed " + error);
    });
    //ToDO: Create API function for this
    //Create component to show result
  }

  return (
    <SearchForm onSave={onSave} onChange={onTextBoxChange}></SearchForm>
    // here should be the result display component
  );
};

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
