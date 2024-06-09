// Building.js

import React, { useState } from "react";
import "./Building.css";

const Building = () => {
  const [selectedBuildings, setSelectedBuildings] = useState([]);

  const toggleSelection = (building) => {
    setSelectedBuildings((prevSelected) => {
      if (prevSelected.includes(building)) {
        return prevSelected.filter((item) => item !== building);
      } else {
        return [...prevSelected, building];
      }
    });
  };

  return (
    <div>
      <header>
        <h1>Select Three Buildings</h1>
      </header>
      <main>
        <div className="container">
          {["Building 1", "Building 2", "Building 3"].map((building, index) => (
            <div
              key={index}
              className={`building ${
                selectedBuildings.includes(building) ? "selected" : ""
              }`}
              onClick={() => toggleSelection(building)}
            >
              {building}
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default Building;
