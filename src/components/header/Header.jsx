import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi"; //search icon import karwa rakha h 
import { SlMenu } from "react-icons/sl"; // hamburger icon import karwa rakha h
import { VscChromeClose } from "react-icons/vsc";  // close icon import karwa rakha h
import { useNavigate, useLocation } from "react-router-dom";
// use nagivate isliye import karwaya h ki jab menu pe click kare toh click kark movie k page par ya tv shows k click pe tv shows pe jaana h toh isliye import karwaya h 

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>Header</div>
    );
};

export default Header;