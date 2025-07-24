// src/components/SearchBar.js
import React from "react";

function SearchBar({ sortType, setSortType, filterType, setFilterType }) {
  return (
    <div style={{ marginBottom: "1rem", padding: "1rem", backgroundColor: "#fff", borderRadius: "8px" }}>
      <h4 style={{ color: "#1b5e20" }}>Sort & Filter</h4>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          <input
            type="radio"
            name="sort"
            value="Alphabetically"
            checked={sortType === "Alphabetically"}
            onChange={(e) => setSortType(e.target.value)}
          />
          Alphabetically
        </label>
        <label style={{ marginLeft: "1rem" }}>
          <input
            type="radio"
            name="sort"
            value="Price"
            checked={sortType === "Price"}
            onChange={(e) => setSortType(e.target.value)}
          />
          Price
        </label>
      </div>

      <div>
        <label>Filter by Type: </label>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          {/* Add more if needed based on your db.json */}
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
