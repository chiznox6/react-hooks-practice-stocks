import React from "react";

function Stock({ stock, onClick }) {
  const { name, price, ticker } = stock;

  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        cursor: "pointer",
        backgroundColor: "#fff",
      }}
    >
      <h4>{ticker} - {name}</h4>
      <p>${price}</p>
    </div>
  );
}

export default Stock;
