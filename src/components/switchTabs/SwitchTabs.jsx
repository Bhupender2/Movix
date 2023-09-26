import React, { useState } from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0); //ismein seleceted tab ka index pass karna h
  const [left, setLeft] = useState(0); // jo background move hoti wahi dikhti h na uss animation ko bnane k liye

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300); // set time out timing isliye coz jab tum tab change karoge week se day ya day se week toh show hone mein time lgega na jaise week pe change kiya toh toh dusre tab m day likha show hone mein .3 seconds lgenge
    onTabChange(tab, index);
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          //map function use karenge coz data api se aana h
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
  ))}
        <span className="movingBg" style={{ left }} />
      </div>
    </div>
  );
};

export default SwitchTabs;
