import React from "react";
import "./Navbar.css";
import { FaSearch, FaUserCircle, FaHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-top">
                <div className="navbar-logo">
                    <img
                        src="https://static.wixstatic.com/media/1f5c6e_4a490c4efcb6409eb28ff1efaf1748dd~mv2.png"
                        alt="Wix Studio Logo"
                    />
                    <span>WIX STUDIO</span>
                </div>
            </div>

            <div className="navbar-banner">
                ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35 ✶
            </div>

            <div className="navbar-main">
                <div className="navbar-brand">QUENX.</div>
                <div className="navbar-links">
                    <a href="/">Shop All</a>
                    <a href="/">Best Sellers</a>
                    <a href="/">Active QX</a>
                    <a href="/">Artisanal</a>
                    <a href="/">Kids</a>
                    <a href="/">About Us</a>
                </div>
                <div className="navbar-icons">
                    <div className="navbar-search">
                        <FaSearch />
                        <span>Search</span>
                    </div>
                    <a href="/">Log In</a>
                    <FaUserCircle />
                    <FaHeart />
                    <div className="navbar-cart">
                        <FaShoppingBag />
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
