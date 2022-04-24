import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Chart from "chart.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

// const ctx = document.getElementById("myChart").getContext("2d");

// async function getData() {
//   fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=2")
//     .then((response) => {
//       if (response.status !== 200) {
//         return "Sorry there might have been an error on our end";
//       } else {
//         console.log(response);
//         return response.json();
//       }
//     })
//     .then((data) => {
//       console.log(data);

//       const cryptodata = {
//         labels: [data.coins[0].name, data.coins[1].name],
//         datasets: [
//           {
//             label: "Crypto",
//             data: [data.coins[0].price, data.coins[1].price],
//             backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//             hoverOffset: 4,
//           },
//         ],
//       };

//       // eslint-disable-next-line no-unused-vars
//       const myChart = new Chart(ctx, {
//         type: "doughnut",
//         data: cryptodata,
//       });
//     });
// }

// getData();
