/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Chart from "chart.js/auto";
import { X } from "react-feather";

const History = (props) => {
  const canvas = useRef();
  const [duration, setDuration] = useState("1m");
  const [dur, setDur] = useState("1 Month");
  const [chart, setChart] = useState(null);

  const getData = async (dura) => {
    await fetch(
      `https://api.coinstats.app/public/v1/charts?period=${dura}&coinId=${props.data.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        const chartData = {
          labels: data.chart.map((array) => data.chart.indexOf(array)),
          datasets: [
            {
              label: `${props.data.name}`,
              backgroundColor: "rgba(207, 26, 41, 1)",
              borderColor: "rgba(207, 26, 41, 1)",
              data: data.chart.map((array) => array[1]),
            },
          ],
        };

        const config = {
          type: "line",
          data: chartData,
          options: {},
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
              setDur("24 Hours");
            }}
          >
            24 Hours
          </li>
          <li
            onClick={() => {
              switchHistory("1w");
              setDur("1 Week");
            }}
          >
            1 Week
          </li>
          <li
            onClick={() => {
              switchHistory("1m");
              setDur("1 Month");
            }}
          >
            1 Month
          </li>
          <li
            onClick={() => {
              switchHistory("3m");
              setDur("3 Months");
            }}
          >
            3 Months
          </li>
          <li
            onClick={() => {
              switchHistory("6m");
              setDur("6 Months");
            }}
          >
            6 Months
          </li>
          <li
            onClick={() => {
              switchHistory("1y");
              setDur("1 Year");
            }}
          >
            1 Year
          </li>
          <li
            onClick={() => {
              switchHistory("all");
              setDur("All Time");
            }}
          >
            All Time
          </li>
        </ul>
      </nav>
      <h2>{dur}</h2>
      <div className="Uncharted">
        <div className="Chart__Alpha">
          <canvas className="Chart__Canvas" ref={canvas}></canvas>
        </div>
      </div>
    </div>
  );
};

export default History;
