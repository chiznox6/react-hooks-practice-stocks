// src/App.js
import React, { useState, useEffect } from "react";
// src/App.js
import SearchBar from "./SearchBar";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";


function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  const filteredStocks =
    filterType === "All"
      ? stocks
      : stocks.filter((stock) => stock.type === filterType);

  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortType === "Alphabetically") return a.ticker.localeCompare(b.ticker);
    if (sortType === "Price") return a.price - b.price;
    return 0;
  });

  function handleBuy(stock) {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  }

  function handleSell(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  return (
    <div
      style={{
        backgroundColor: "#e8f5e9",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#1b5e20", marginBottom: "2rem" }}>
        📈 Flatiron Stock Exchange
      </h1>
      <SearchBar
        sortType={sortType}
        setSortType={setSortType}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <StockContainer stocks={sortedStocks} onBuy={handleBuy} />
        <PortfolioContainer portfolio={portfolio} onSell={handleSell} />
      </div>
    </div>
  );
}

export default App;
