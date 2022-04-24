import React, { useEffect, useState } from "react";
import Card from "./Card";

const Coins = () => {
  const [coins, setCoins] = useState(<></>);
  const getData = async () => {
    await fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=12&currency=USD"
    )
      .then((response) => {
        if (response.status !== 200) return {};
        return response.json();
      })
      .then((data) => {
        setCoins(data.coins.map((coin) => <Card key={coin.id} data={coin} />));
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="Section__Coins">
      <h1>Coins</h1>
      <h2>Global Prices</h2>
      <div className="Coins__Cards">{coins}</div>
    </div>
  );
};

export default Coins;
