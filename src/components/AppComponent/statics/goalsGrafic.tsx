import React, { useEffect, Component} from "react";
import { Chart } from "react-google-charts";
import { GoalsGraphicProps  } from "../../../interfaces/AppInterfaces/static";

import database from "../../../json/statistics.json"


const GoalGraphic: React.FC<GoalsGraphicProps> = ({data}) => {

    let minutesFor = Object.entries(data.response["goals"]["for"]["minute"])
    let minutesAgainst = Object.entries(data.response["goals"]["against"]["minute"])


    console.log(minutesFor)
    
    let arrayFull: Array<Array<string | number>> = [['TEMPO (minutos)', 'Gols feitos', 'Gols sofridos']]

    for (let i = 0; i < minutesFor.length; i++) {

        const minute = parseInt(minutesFor[i][0].split('-')[1], 10)
        const goalfor = minutesFor[i][1].total || 0;
        const against = minutesAgainst[i][1].total || 0;
        arrayFull.push([minute, goalfor, against])
    }
    
    const options = {
        backgroundColor: 'transparent',
        title: "Gols por tempo de jogo",
        colors: ['#00308F', '#C6011F'],
        titleTextStyle: {
          fontSize: 24, 
          italic: true,
        },
        chartArea: {
          top: 90, 
          bottom: 70,
          left: 50, 
          right: 140,
          backgroundColor: 'transparent'
        },
        series: {
          0: { 
            lineWidth: 2, 
            pointSize: 4, 
          },
          1: { 
            lineWidth: 2, 
            pointSize: 4, 
          },
        },
        vAxis: {
          title: 'G O L S',
          format: '0',
          titleTextStyle: {
            color: 'black',
            bold: true
          },
          textStyle:{
            color: 'black'
          },
          gridlines: {
            color: 'black', 
            count: 6,
          },
        },
        hAxis: {
          title: 'TEMPO (Minutos)', 
          titleTextStyle: {
            color: 'black',
            bold: true
          },
          textStyle:{
            color: 'black'
          },
          gridlines: {
            color: 'transparent', 
          },
        },
      };

    return (  
        <Chart
          chartType="LineChart"
          width= "70vw"
          height= "350px"
          data={arrayFull}
          options={options}
        />
      );
}


export default GoalGraphic;