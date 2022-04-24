import React, { useEffect, useState } from "react";
import { Globe, Twitter, ChevronUp, ChevronDown, Minus } from "react-feather";
import History from "./History";

const Card = ({ data }) => {
  const [hour, setHour] = useState(<></>);
  const [day, setDay] = useState(<></>);
  const [week, setWeek] = useState(<></>);
  const [disabled, setDisabled] = useState(false);

  const [history, setHistory] = useState(<></>);

  const showHistory = () => {
    setHistory(<History data={data} hide={hideHistory} />);
    setDisabled(true);
  };

  const hideHistory = () => {
    setHistory(<></>);
    setDisabled(false);
  };

  useEffect(() => {
    if (data.priceChange1h > 0) {
      setHour(<ChevronUp color="#2BFF00" size={20} />);
    } else if (data.priceChange1h < 0) {
      setHour(<ChevronDown color="#FF411F" size={20} />);
    } else {
      setHour(<Minus color="#FFFFFF" size={20} />);
    }

    if (data.priceChange1d > 0) {
      setDay(<ChevronUp color="#2BFF00" size={20} />);
    } else if (data.priceChange1d < 0) {
      setDay(<ChevronDown color="#FF411F" size={20} />);
    } else {
      setDay(<Minus color="#FFFFFF" size={20} />);
    }

    if (data.priceChange1w > 0) {
      setWeek(<ChevronUp color="#2BFF00" size={20} />);
    } else if (data.priceChange1w < 0) {
      setWeek(<ChevronDown color="#FF411F" size={20} />);
    } else {
      setWeek(<Minus color="#FFFFFF" size={20} />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Coin__Data">
      <div className="Coin__Card">
        <div className="Coin__Card__Info">
          <div className="CCI__Header">
            <div className="CCI__Icon">
              <img src={data.icon} alt={data.symbol} />
            </div>

            <h3>
              {data.name} ({data.symbol})
            </h3>
          </div>
          <div className="CCI__Body">
            <p>
              Rank: {data.rank}
              <br />
              Price: {data.price}
              <br />
              Market Capitalization: {data.marketCap}
              <br />
              Total Supply: {data.totalSupply}
              <br />
              Available Supply: {data.availableSupply}
              <br />1 BTC = {data.priceBtc} {data.symbol}
            </p>
          </div>
          <div className="CCI__Footer">
            <button
              disabled={disabled}
              className="CCI__History"
              onClick={showHistory}
            >
              <span>Price Change History</span>{" "}
              <ChevronDown color="#0a0a0a" size={18} />
            </button>

            <div className="CCI__Social">
              {data.twitterUrl && (
                <a className="Card__Social__Icons" href={data.twitterUrl}>
                  <Twitter color="currentColor" size={24} />
                </a>
              )}

              {data.websiteUrl && (
                <a className="Card__Social__Icons" href={data.websiteUrl}>
                  <Globe color="currentColor" size={24} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="Coin__Card__Price">
          <div className="CCP">
            <p>1 Hour Price Change {data.priceChange1h}</p> {hour}
          </div>
          <div className="CCP">
            <p>1 Day Price Change {data.priceChange1d}</p> {day}
          </div>
          <div className="CCP">
            <p>1 Week Price Change {data.priceChange1w}</p> {week}
          </div>
        </div>
      </div>
      {history}
    </div>
  );
};

export default Card;
