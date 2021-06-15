import React from "react";
import { connect } from "react-redux";
import * as announcedInfoActions from "../../redux/actions/announcedInfoActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Chart from "./Chart";

class CoursesPage extends React.Component {
  componentDidMount() {
    if (this.props.announcedInfos.length === 0) {
      this.props.actions.loadAnnouncedInfos().catch((error) => {
        alert("Loading loadAnnouncedInfos failed " + error);
      });
    }
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <Chart data={this.props.announcedInfos}></Chart>
            </td>
            <td>
              <Chart data={this.props.announcedInfos}></Chart>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

CoursesPage.propTypes = {
  announcedInfos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    announcedInfos: state.announcedInfos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAnnouncedInfos: bindActionCreators(
        announcedInfoActions.loadAnnouncedInfo,
        dispatch
      ),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
