import React from "react";
import { connect } from "react-redux";
import * as wlanInfoActions from "../../redux/actions/wlanInfoActions.js";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Searchbar from "./Searchbar";
import Button from 'react-bootstrap/Button'

class SearchPage extends React.Component {

  componentDidMount() {
    if (this.props.wlanInfos.length === 0) {
      this.props.actions.loadwlanInfos().catch((error) => {
        alert("Loading loadwlanInfos failed " + error);
      });
    }
    
  }
render() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <Searchbar data={this.props.wlanInfos} title="wlan"></Searchbar>
          </td>
          <td>
            <Searchbar data={this.props.wlanInfos} title="wlan"></Searchbar>
          </td>
          <td>
            <Searchbar data={this.props.wlanInfos} title="wlan"></Searchbar>
          </td>
          <td>
            <Searchbar data={this.props.wlanInfos} title="wlan"></Searchbar>
          </td>
          <td>
          <Button onclick="retrievePhones()" variant="info" type="submit">Submit</Button>
          </td>
        </tr>
      </tbody>
    </table>
  );}
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
    loadwlanInfos: bindActionCreators(
      wlanInfoActions.loadwlanInfo,
      dispatch
    ),
  },
};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);





