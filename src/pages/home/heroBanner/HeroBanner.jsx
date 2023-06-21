import React, {useState} from "react";
import "./style.scss";

const HeroBanner = () => {
  const [background , setBackground]= useState("");
  const [query , setQuery ] =useState("");

  // ek method likhenge jo ki pass kardenge hum input k andar and enter hit karne pe api call jaani chahiye and query ki length empty nahi honi chahiye
  const searchQueryHandler = (event) =>{
  if(event.key==="Enter" && query.length> 0){


  }
  }



  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies , TV shows and people to discover. Explore now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or Tv show...."
              onChange={(e)=>setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            /> 
            <button> Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
