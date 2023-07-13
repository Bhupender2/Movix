import React from "react";

import "./style.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}

    </div>;
};
//humne ek function create kiya jiske anndar hum kuch bhi pass karenge / koi bhi div toh vo wrap ho jaaega andar wale div mein .yeh cheez baar baar repeat ho rahi thi toh ek function hi create kardiya 

export default ContentWrapper



