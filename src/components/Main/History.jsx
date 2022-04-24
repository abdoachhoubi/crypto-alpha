/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Chart from "chart.js/auto";
import { X } from "react-feather";

const History = (props) => {
  const canvas = useRef();
  const [duration, setDuration] = useState("all");
  const [chart, setChart] = useState(null);

  const getData = async (dura) => {
    await fetch(
      `https://api.coinstats.app/public/v1/charts?period=${dura}&coinId=${props.data.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        const chartData = {
          labels: data.chart.map((array) => data.chart.indexOf(array) + 1),
          datasets: [
            {
              label: `${props.data.name}`,
              backgroundColor: "rgba(207, 26, 41, 1)",
              borderColor: "rgb(255, 255, 255)",
              data: data.chart.map((array) => array[1]),
            },
          ],
        };

        const config = {
          type: "line",
          data: chartData,
          options: {
            fill: true,
          },
        };
        // eslint-disable-next-line no-unused-vars

        if (canvas.current !== undefined) {
          if (chart === null) {
            const ctx = canvas.current.getContext("2d");
            const myChart = new Chart(ctx, config);
            setChart(myChart);
          }
        }
      });
  };
  getData(duration);

  const switchHistory = (dur) => {
    chart.destroy();
    setChart(null);
    setDuration(dur);
    getData(duration);
  };

  return (
    <div id="Coin__Chart">
      <div onClick={props.hide} className="Close__Chart">
        <X color="#FFFFFF" size={30} />
      </div>
      <nav>
        <ul>
          <li
            onClick={() => {
              switchHistory("24h");
            }}
          >
            24 Hours
          </li>
          <li
            onClick={() => {
              switchHistory("1w");
            }}
          >
            1 Week
          </li>
          <li
            onClick={() => {
              switchHistory("1m");
            }}
          >
            1 Month
          </li>
          <li
            onClick={() => {
              switchHistory("3m");
            }}
          >
            3 Months
          </li>
          <li
            onClick={() => {
              switchHistory("6m");
            }}
          >
            6 Months
          </li>
          <li
            onClick={() => {
              switchHistory("1y");
            }}
          >
            1 Year
          </li>
          <li
            onClick={() => {
              switchHistory("all");
            }}
          >
            All Time
          </li>
        </ul>
      </nav>
      <canvas className="Chart__Canvas" ref={canvas}></canvas>
    </div>
  );
};

export default History;
