import React from "react";
import { connect } from "react-redux";
import * as announcedInfoActions from "../../redux/actions/announcedInfoActions";
import * as authorActions from "../../redux/actions/authorActions";
import * as twoGbandsInfoActions from "../../redux/actions/twoGbandsInfoActions";
import * as SIMInfoActions from "../../redux/actions/SIMInfoActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import PieChart from "./PieChart";
import ColChart from "./ColChart";
import RollPopChart from "./RollpopChart";
class CoursesPage extends React.Component {
  componentDidMount() {
    if (this.props.announcedInfos.length === 0) {
      this.props.actions.loadAnnouncedInfos().catch((error) => {
        alert("Loading loadAnnouncedInfos failed " + error);
      });
    }
    if (this.props.twoGbandsInfos.length === 0) {
      this.props.actions.loadtwoGbandsInfos().catch((error) => {
        alert("Loading loadtwoGbandsInfos failed " + error);
      });
    }
    if (this.props.SIMInfos.length === 0) {
      this.props.actions.loadSIMInfos().catch((error) => {
        alert("Loading loadSIMInfos failed " + error);
      });
    }
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <PieChart data={this.props.announcedInfos}></PieChart>
            </td>
            <td>
              <ColChart data={this.props.twoGbandsInfos}></ColChart>
            </td>
          </tr>
          <tr>
            <td>
              <RollPopChart
                data={this.props.SIMInfos}
                title="SIM total count"
                yTitle="SIM total count"
              ></RollPopChart>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

CoursesPage.propTypes = {
  announcedInfos: PropTypes.array.isRequired,
  twoGbandsInfos: PropTypes.array.isRequired,
  SIMInfos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    announcedInfos: state.announcedInfos,
    twoGbandsInfos: state.twoGbandsInfos,
    SIMInfos: state.SIMInfos,
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

      loadtwoGbandsInfos: bindActionCreators(
        twoGbandsInfoActions.loadtwoGbandsInfo,
        dispatch
      ),
      loadSIMInfos: bindActionCreators(SIMInfoActions.loadSIMInfo, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
