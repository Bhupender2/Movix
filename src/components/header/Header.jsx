import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi"; //search icon import karwa rakha h
import { SlMenu } from "react-icons/sl"; // hamburger icon import karwa rakha h
import { VscChromeClose } from "react-icons/vsc"; // close icon import karwa rakha h
import { useNavigate, useLocation } from "react-router-dom";
// use nagivate isliye import karwaya h ki jab menu pe click kare toh click kark movie k page par ya tv shows k click pe tv shows pe jaana h toh isliye import karwaya h

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  //first 2 use state ka use kark header ka scrooling effect achieve karenge.
  const [mobileMenu, setMobileMenu] = useState(false); // hamburger ko show and hide karahe h vo hum use state k base mein karenge
  const [query, setQuery] = useState(""); // search bar aaraha h uske text ko set karenge iss state ki help se
  const [showSearch, setShowSearch] = useState(""); // JO click karne pe search baar show ho raha h na yeh uske liye h
  const navigate = useNavigate(); // useNavigate hook ko use kark ek instance create kardiya h
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  return (
    <header className={`header ${mobileMenu? "mobileView":""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch />
          {mobileMenu ? (
            <VscChromeClose onclick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      <div className="searchBar">
      <ContentWrapper>
      
      
      
      </ContentWrapper>
      </div>
    </header>
  );
};

export default Header;
