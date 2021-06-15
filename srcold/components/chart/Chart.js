import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
//import "./App.css";

const Chart = (props) => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },
    title: {
      text: "Announced Information",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
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

export default Chart;
