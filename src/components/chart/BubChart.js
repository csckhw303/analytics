import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
//import "./App.css";

const BubChart = (props) => {
  const options = {
    chart: {
      type: 'packedbubble',
      height: '100%'
  },
  title: {
      text: 'SIM Information'
  },
  tooltip: {
      useHTML: true,
      pointFormat: '<b>{point.name}:</b> {point.value}'
  },
  plotOptions: {
      packedbubble: {
          minSize: '20%',
          maxSize: '100%',
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
              gravitationalConstant: 0.05,
              splitSeries: true,
              seriesInteraction: false,
              dragBetweenSeries: true,
              parentNodeLimit: true
          },
          dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                  property: 'y',
                  operator: '>',
                  value: 250
              },
              style: {
                  color: 'black',
                  textOutline: 'none',
                  fontWeight: 'normal'
              }
          }
      }
  },
  series: [{
    name: "type",
    colorByPoint: true,
    data: props.data,
      }]
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

export default BubChart;
