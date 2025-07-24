// src/components/StockContainer.js
import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuy }) {
  return (
    <div className="col">
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} onClick={() => onBuy(stock)} />
      ))}
    </div>
  );
}

export default StockContainer;

