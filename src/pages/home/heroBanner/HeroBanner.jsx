import React, {useState} from "react";
import "./style.scss";
import {useNavigate} from "react-router-dom";

const HeroBanner = () => {
  const [background , setBackground]= useState("");
  const [query , setQuery ] =useState("");
  const navigate =useNavigate();

// ek method likhenge jo ki pass kardenge hum input k andar and enter hit karne pe api call jaani chahiye and query ki length empty nahi honi chahiye enter karne pe yeh search page pe jaana chahiye uske liye ek hook hota h useNavigate vo use karte h
  const searchQueryHandler = (event) =>{
  if(event.key==="Enter" && query.length> 0){
    navigate(`/search/${query}`);

  }
  };
  //mein back stick le raha hun coz mujhe beech mein yeh query bhi use karni h

  ///search/${query}` yeh dynamic isliye diya tha search result compoenent ka path esehi diya h usmein jo query hogi vo dynamic hogi

  //jo bhi mein text likhunga vo  or enter karunga uska path search/jo likha h meine...vo enter karne mein path mein bhi dikhega jaise ki
  //enter karne mein acche se append ho raha h


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
