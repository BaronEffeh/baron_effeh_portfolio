import React, { useState } from "react";
import "./navbar.css";
import logo from '../assets/logo.jpg'
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import contactIcon from "../assets/contact-icon.png";
import menu from "../assets/menu.png";
// import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuiListItem">Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-30} duration={500} className="desktopMenuiListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuiListItem">Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuiListItem">Contact</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>
                <img src={contactIcon} alt="" className="desktopMenuImg" /> Contact Me</button>

            <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Clients</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;