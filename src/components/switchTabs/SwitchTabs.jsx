import React from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => {
          <span key={index} className={`tabItem`}>
            {tab}
          </span>;
        })}
        <span className="movingBg" style={{}}/>
      </div>
    </div>
  );
};

export default SwitchTabs;
