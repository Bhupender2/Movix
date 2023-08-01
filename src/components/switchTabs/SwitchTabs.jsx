import React, {useState} from "react";
import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {

const [setselectedTab, setSetselectedTab] = useState(0); //ismein seleceted tab ka index pass karna h 
const [left, setLeft] = useState(0);    // jo background move hoti wahi dikhti h na uss animation ko bnane k liye

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => { //map function use karenge coz data api se aana h 
          <span key={index} className={`tabItem`}> 
            {tab}
          </span>;
        })}
        <span className="movingBg" style={{left}}/>
      </div>
    </div>
  );
};

export default SwitchTabs;
