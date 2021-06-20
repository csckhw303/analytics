import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import highchartsDumbbell from "highcharts/modules/dumbbell";
import highchartsLollipop from "highcharts/modules/lollipop";

// init the module
HC_more(Highcharts);
highchartsDumbbell(Highcharts);
highchartsLollipop(Highcharts);
const RollPopChart = (props) => {
  // Create the chart

  const options = {
    chart: {
      type: "lollipop",
    },

    accessibility: {
      point: {
        valueDescriptionFormat: "{index}. {xDescription}, {point.y}.",
      },
    },

    legend: {
      enabled: false,
    },

    title: {
      text: "SIM total count",
    },

    tooltip: {
      shared: true,
    },

    xAxis: {
      type: "category",
    },

    yAxis: {
      title: {
        text: "Count",
      },
    },

    series: [
      {
        name: "Population",
        data: props.data,
      },
    ],
  };
  const result =
    props.data.length > 0 ? (
      <div className="App">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    ) : (
      <div className="App"></div>
    );

  return result;
};

export default RollPopChart;
