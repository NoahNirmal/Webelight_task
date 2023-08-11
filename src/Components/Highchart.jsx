import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import axios from "axios";

const Chart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/repos/freecodecamp/freecodecamp/stats/code_frequency")
      .then((response) => {
        if (response.status === 200) {
          const codeFrequency = response.data;
          const series = [
            {
              name: "Additions",
              data: codeFrequency.map((entry) => [moment(entry[0] * 1000).valueOf(), entry[1]])
            },
            {
              name: "Deletions",
              data: codeFrequency.map((entry) => [moment(entry[0] * 1000).valueOf(), -entry[2]])
            }
          ];
          setData(series);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const options = {
    title: {
      text: "Code frequency for freecodecamp/freecodecamp"
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Weeks"
      }
    },
    yAxis: {
      title: {
        text: "Lines of code"
      }
    },
    series: data
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
