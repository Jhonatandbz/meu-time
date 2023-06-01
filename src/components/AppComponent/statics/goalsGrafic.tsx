import React, { useEffect, Component} from "react";
import "../../../styles/goalGraphic.css"
import { Chart } from "react-google-charts";

import { GoalsGraphicProps  } from "../../../interfaces/AppInterfaces/static";
import database from "../../../json/statistics.json"









const GoalGraphic: React.FC = () => {

    const minutesFor = database.response["goals"]["for"]["minute"]
    const minutesAgainst = database.response["goals"]["against"]["minute"]

    let arrayFull = [['tempo', 'gols'], ...Object.entries(minutesFor).map(([interval, values]) => {
        const time = parseInt(interval.split('-')[1], 10);
        const total = values.total || 0
        return [time, total]
    })];
    
    const options = {
        chart: {
          title: "Gols por tempo de jogo",
          subtitle: "",
        },
      };


    return (
        <Chart
          chartType="Line"
          width="500px"
          height="300px"
          data={arrayFull}
          options={options}
        />
      );
}


export default GoalGraphic;