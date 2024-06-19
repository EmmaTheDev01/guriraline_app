import React, { useState } from "react";

const TabsWithButtons = () => {
  const [buttonActive, setButtonActive] = useState("tab1");

  const handleButtonClick = (value) => {
    if (value === buttonActive) {
      return;
    }
    setButtonActive(value);
  };

  return (
    <div className="mb-3">
      <div className="flex">
        <button
          className={`tab-button ${buttonActive === "tab1" ? "active" : ""}`}
          onClick={() => handleButtonClick("tab1")}
        >
          Home
        </button>
        <button
          className={`tab-button ${buttonActive === "tab2" ? "active" : ""}`}
          onClick={() => handleButtonClick("tab2")}
        >
          Profile
        </button>
        <button
          className={`tab-button ${buttonActive === "tab3" ? "active" : ""}`}
          onClick={() => handleButtonClick("tab3")}
        >
          Messages
        </button>
      </div>

      <div className="tab-content">
        <div className={`tab-pane ${buttonActive === "tab1" ? "active" : ""}`}>
          Tab 1 content button version
        </div>
        <div className={`tab-pane ${buttonActive === "tab2" ? "active" : ""}`}>
          Tab 2 content button version
        </div>
        <div className={`tab-pane ${buttonActive === "tab3" ? "active" : ""}`}>
          Tab 3 content button version
        </div>
      </div>
    </div>
  );
};

export default TabsWithButtons;
