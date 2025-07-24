// src/components/Stock.js
import React from "react";

function Stock({ stock, onClick }) {
  const { name, price, ticker, type } = stock;

  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="card-body">
        <h5 className="card-title">{name} ({ticker})</h5>
        <p className="card-text">
          <strong>Type:</strong> {type}<br />
          <strong>Price:</strong> ${price}
        </p>
      </div>
    </div>
  );
}

export default Stock;
