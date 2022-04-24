import React from "react";
import { ArrowDown } from "react-feather";

const Header = () => {
  return (
    <header id="Header__Section">
      <div className="container">
        <h1 className="Header__Heading">Crypto Alpha</h1>
        <p className="Header__SubHeading">
          Get the latest unpdates about
          <br />
          Bitcoin, Ethereum, Tether, Solana and more!
        </p>
        <a href="#Main__Section" className="Header__Arrow">
          <ArrowDown color="#FFFFFF" size={30} />
        </a>
      </div>
    </header>
  );
};

export default Header;
