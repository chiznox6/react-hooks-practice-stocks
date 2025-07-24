// src/App.js
import React, { useState, useEffect } from "react";
import StockContainer from "./components/StockContainer";
import PortfolioContainer from "./components/PortfolioContainer";
import SearchBar from "./components/SearchBar";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState(""); // "Alphabetically" | "Price"
  const [filterType, setFilterType] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then(setStocks);
  }, []);

  const handleBuy = (stock) => {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
    }
  };

  const handleSell = (stock) => {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  };

  const handleSort = (type) => setSortType(type);
  const handleFilter = (type) => setFilterType(type);

  const filteredStocks = stocks.filter(
    (stock) => filterType === "All" || stock.type === filterType
  );

  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortType === "Alphabetically") return a.ticker.localeCompare(b.ticker);
    if (sortType === "Price") return a.price - b.price;
    return 0;
  });

  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <StockContainer stocks={sortedStocks} onBuy={handleBuy} />
        <PortfolioContainer portfolio={portfolio} onSell={handleSell} />
      </div>
    </div>
  );
}

export default App;
