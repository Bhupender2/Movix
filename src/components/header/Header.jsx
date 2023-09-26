import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi"; //search icon import karwa rakha h
import { SlMenu } from "react-icons/sl"; // hamburger icon import karwa rakha h
import { VscChromeClose } from "react-icons/vsc"; // close icon import karwa rakha h
import { useNavigate, useLocation } from "react-router-dom";
// use nagivate isliye import karwaya h ki jab menu pe click kare toh click kark movie k page par ya tv shows k click pe tv shows pe jaana h toh isliye import karwaya h

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/newwhitehorizontallogo.png";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  //first 2 use state ka use kark header ka scrooling effect achieve karenge.
  const [mobileMenu, setMobileMenu] = useState(false); // hamburger ko show and hide karahe h vo hum use state k base mein karenge
  const [query, setQuery] = useState(""); // search bar aaraha h uske text ko set karenge iss state ki help se
  const [showSearch, setShowSearch] = useState(""); // JO click karne pe search baar show ho raha h na yeh uske liye h
  const navigate = useNavigate(); // useNavigate hook ko use kark ek instance create kardiya h
  const location = useLocation();// hmari current location btata h yeh and hum ek component mein kitne bhi useeffect method likh sakte h

  useEffect(()=>{
window.scrollTo(0,0)
  },[location]) // dependency array k andar location daali h toh jab bhi location change hogi toh ek function call hoga jab hum dusre page mein jaayenge toh scroll toh jahan pe chora tha wahi pe rahega coz single page application h refresh toh hota h nahi toh hum kya karenge ki jab bhi path change hoga hum scroll 0,0 pe aajayenge or path change hoga vo humein useLocation hook se pta ;gega

  const controlNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY) //window.scrollY hmaara scroll amount btati h 
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]); // whenver this state changes [we can also say dependency array] andar jo function likha h vo call hoga

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  }; // jab hum dusre page mein jaarahe honge na toh search bar open hi reh jaayega toh usse close karne k liye hum use karenge settimeout or time daalenge 1 sec ka

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };
  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie"); // agar argument type movie h toh use karenge navigate method
    } else {
      navigate("/explore/tv"); // agar argument type  tv h tab bhi use karenge navigate method
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : " "} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />{" "}
            {/*yeh desktop k liye h usmein bhi search pe click karne pe khule toh isliye onClick method call karwadiya*/}
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />{" "}
          {/*yeh mobile view k liye h uspe  bhi same functionality use karni h click karne mein show larwana h*/}
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} /> //my mistake is that I write the wrong spelling of onClick
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or Tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
