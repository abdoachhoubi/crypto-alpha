import React, { useEffect, useState } from "react";
import Card from "./Card";

const Coins = () => {
  const [coins, setCoins] = useState(<></>);
  const [popup, setPopup] = useState("hidden");
  const [popx, setPop] = useState("hidden");

  const switchPopup = () => {
    if (popup === "Chip") {
      setPopup("popup");
    } else {
      setPopup("Chip");
    }
  };

  const switchPop = () => {
    if (popx === "Chipx") {
      setPop("Chipy");
    } else {
      setPop("Chipx");
    }
  };

  const refresh = () => {
    getData(true);
  };

  const getData = async (pop) => {
    await fetch(
      "https://api.coinstats.app/public/v1/coins?skip=0&limit=12&currency=USD"
    )
      .then((response) => {
        if (response.status !== 200) {
          switchPop();
          return {};
        }
        return response.json();
      })
      .then((data) => {
        setCoins(data.coins.map((coin) => <Card key={coin.id} data={coin} />));
        if (pop) switchPopup();
      })
      .finally(() => {
        console.log("Finally");
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="Section__Coins">
      <div className={popup}>
        <p className="popup__msg">Everything is up to date</p>
      </div>
      <div className={popx}>
        <p className="popup__msg">Network Error</p>
      </div>
      <div className="Coins__Ref">
        <h1 className="Coins__Cards__Heading">Coins</h1>
        <button className="Coins__Refresh" onClick={refresh}>
          Refresh
        </button>
      </div>
      <div className="Coins__Cards">{coins}</div>
    </div>
  );
};

export default Coins;
