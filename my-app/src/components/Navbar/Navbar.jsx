import React from "react";
import "./Navbar.css";
import { FaSearch, FaUserCircle, FaHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-top">
                <div className="navbar-logo">
                    <img
                        src="https://wixmp-cca7fdc52d9b9ae8ca79a86d.wixmp.com/marketplace/partners/e199f9c4-fccd-4017-bc4a-1ee4471308b0/profile-image/1692852445044/wix-black.jpg"
                        alt="Wix Studio Logo"
                    />
                    <span>WIX STUDIO</span>
                </div>
            </div>

            <div className="navbar-banner">
  <div className="scroll-text">
    ✶ FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35  ✶  
     FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35   ✶   
     FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35   ✶   FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35   ✶   FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35   ✶   FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35   ✶   FREE SHIPPING ON ALL INTERNATIONAL ORDERS OVER $35   ✶ 
  </div>
</div>

            <div className="navbar-main">
                <div className="navbar-brand">QUENX.</div>
                <div className="navbar-links">
                    <a href="/">Shop All</a>
                    <a href="/">Best Sellers</a>
                    <a href="/">Active QX</a>
                    <a href="/">Artisanal</a>
                    <a href="/">Kids</a>
                    <a href="/">Products</a>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;