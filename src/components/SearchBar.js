// src/components/SearchBar.js
import React from "react";

function SearchBar({ onSort, onFilter }) {
  return (
    <div className="search-bar">
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          name="sort"
          value="Alphabetically"
          onChange={(e) => onSort(e.target.value)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="Price"
          onChange={(e) => onSort(e.target.value)}
        />
        Price
      </label>

      <br />

      <label>
        <strong>Filter by Type:</strong>
        <select onChange={(e) => onFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          {/* Add more if needed based on your db.json */}
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
