import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  // we want ki ki backdrop wala path h vo setbaclground mein push hojaaye toh uske liye humein use effect use karna padhta h
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  //use fetch mein upcoming data call karwaya so upcoming movies dikengi hum kuch bhi call karwaenge but humein 20 movies hi show hongi or usse jyda results dikhane h toh
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch("/movie/upcoming");
  //starting mein toh data kuch nahi aaega toh jab load hoga tabhi aaaega data jab bhi api call successful hogi tab jaake data aaega or ussi time pe data aaega os ussi time pe useeffect ka use karenge hum

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

    //hum cahahta h ki refresh karne mein hero banner mein ek new image aaye so use fectch ka use karne mein humein upcoming mein 20 images aaye ussmein se koi bhi random no wali image aajaaye so math.random ka use kiya but vo humein 4.4 ya 4.6 ese decimels bhi de sakta h toh usse round off karne k liye math.floor ka use kiya humne
    //? optional chaining ka use karte h taaki jab tak api se data nahi aaye aage ka code nahi chalega jab tak data undefined h tab tak aage ka code nahi chalegaa
    setBackground(bg);
  }, [data]);
  // react dev tools ka use karenge yeh dekhne k liye ki herobanner component mein state update hui h ki nahi

  // ek method likhenge jo ki pass kardenge hum input k andar and enter hit karne pe api call jaani chahiye and query ki length empty nahi honi chahiye enter karne pe yeh search page pe jaana chahiye uske liye ek hook hota h useNavigate vo use karte h
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  //mein back stick le raha hun coz mujhe beech mein yeh query bhi use karni h

  ///search/${query}` yeh dynamic isliye diya tha search result compoenent ka path esehi diya h usmein jo query hogi vo dynamic hogi

  //jo bhi mein text likhunga vo  or enter karunga uska path search/jo likha h meine...vo enter karne mein path mein bhi dikhega jaise ki
  //enter karne mein acche se append ho raha h

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies , TV shows and people to discover. Explore now
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or Tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button> Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;

// contentWrapper ko kisi bhi div ki tarah hi use karenge hum 