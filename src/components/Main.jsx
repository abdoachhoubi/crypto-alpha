import React, { useState } from "react";
import Coins from "./Main/Coins";

const Main = () => {
  const [page, setPage] = useState(<Coins />);
  const switchtocoins = () => {
    setPage(<Coins />);
  };
  const switchtoexchange = () => {
    setPage(
      <>
        <h1>Echange</h1>
      </>
    );
  };
  const switchtonews = () => {
    setPage(
      <>
        <h1>News</h1>
      </>
    );
  };

  return (
    <main id="Main__Section">
      <nav>
        <ul>
          <li onClick={switchtocoins}>Coins</li>
          <li onClick={switchtoexchange}>Exchange</li>
          <li onClick={switchtonews}>News</li>
        </ul>
      </nav>
      {page}
    </main>
  );
};

export default Main;
