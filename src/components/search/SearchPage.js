import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as searchActions from "../../redux/actions/searchActions";
import * as wlanInfoActions from "../../redux/actions/wlanInfoActions";
import * as chipsetInfoActions from "../../redux/actions/chipsetInfoActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SearchForm from "./SearchForm";
import SearchResultShow from "./SearchResultShow";

//I've changed this component from class to function
//There are two types of components exist. One is class component and the other is functional component
//But class component is getting retired now. So new feature can not be used in class component
//But it still is being used in many projects, so it needs to be understood.
//But useEffect or useState can not be used.
const SearchPage = (props) => {
  //I am using react state here not redux state for collecting the criteria value for the search
  const [criteria, setCriteria] = useState({
    category: "",
    title: "",
    wlan: [],
    chipset: [],
  }); //this will start react local variable with convenient "setCategory" as update function

  //it is simailar as componentDidMount. syntax is little different
  useEffect(() => {
    if (props.wlanInfos.length === 0) {
      props.actions.loadwlanInfos().catch((error) => {
        alert("Loading loadwlanInfos failed " + error);
      });
    }
    if (props.chipsetInfos.length === 0) {
      props.actions.loadchipsetInfos().catch((error) => {
        alert("Loading loadchipsetInfos failed " + error);
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
  function onSave(event) {
    event.preventDefault();
    props.actions.search(criteria).catch((error) => {
      alert("Search failed " + error);
    });
    //ToDO: Create API function for this
    //Create component to show result
  }
  function onTypeaheadChange(event) {
    const { name, value } = event; //destructure event.target and only use two attribute

    let result = value
      .map(function (obj) {
        return obj.ids;
      })
      .join(",");

    setCriteria((criteriaObject) => ({
      ...criteriaObject, //... means  spread out the attribute of the class title: dd , category: aaa
      [name]: result, //  in this line name can be title or category depending on which input box user is typeing
      //  if there is the same attribute on left side (...criteriaObject), it would be replaced.
      //  if no same then it will be merged into the object, then set with new object
    }));
  }
  return (
    <div>
      <SearchForm
        onSave={onSave}
        onChange={onTextBoxChange}
        wLanOptions={props.wlanInfos}
        chipsetOptions={props.chipsetInfos}
        onTypeaheadChange={onTypeaheadChange}
      ></SearchForm>
      <SearchResultShow result={props.searchResult}></SearchResultShow>
    </div>
  );
};

SearchPage.propTypes = {
  actions: PropTypes.object.isRequired,
  searchResult: PropTypes.array,
  wlanInfos: PropTypes.array,
  chipsetInfos: PropTypes.array,
};

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult,
    wlanInfos: state.wlanInfos,
    chipsetInfos: state.chipsetInfos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      search: bindActionCreators(searchActions.search, dispatch),
      loadwlanInfos: bindActionCreators(wlanInfoActions.loadwlanInfo, dispatch),
      loadchipsetInfos: bindActionCreators(
        chipsetInfoActions.loadchipsetInfo,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
