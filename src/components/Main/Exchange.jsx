import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

const Exchange = () => {
  const [support, setSupport] = useState(<></>);
  const [supported, setSupported] = useState("hidden");
  const [arrow, setArrow] = useState(<ChevronDown color="#FFFFFF" size={30} />);
  const switchSupported = () => {
    switch (supported) {
      case "hidden":
        setSupported("Exchanges__Supported__Group");
        setArrow(<ChevronUp color="#FFFFFF" size={30} />);
        break;
      case "Exchanges__Supported__Group":
        setSupported("hidden");
        setArrow(<ChevronDown color="#FFFFFF" size={30} />);
        break;
      default:
        break;
    }
  };
  const getSupported = async () => {
    await fetch("https://api.coinstats.app/public/v1/exchanges")
      .then((response) => response.json())
      .then((result) =>
        setSupport(
          result.supportedExchanges.map((support) => (
            <div key={support} className="Chip__Container">
              <p className="Supported__Chip">{support}</p>
            </div>
          ))
        )
      )
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getSupported();
  }, []);

  return (
    <div id="Section__Exchange">
      <h1 className="Section__Exchange__Heading">Exchanges</h1>
      <div className="Exchanges__Supported">
        <div className="Drop__Supported" onClick={switchSupported}>
          <h2>Supported Exchanges</h2>
          {arrow}
        </div>
        <div className={supported}>{support}</div>
      </div>
    </div>
  );
};

export default Exchange;
