import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
//import "./App.css";

const ColChart = (props) => {
  // Create the chart

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: props.title,
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: props.yTitle,
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> total<br/>',
    },

    series: [
      {
        name: "Browsers",
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

export default ColChart;
