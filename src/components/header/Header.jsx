import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="header__links">
                <Link className="header__links-link" to="/">Shop</Link>
                <span> | </span>
                <Link className="header__links-link" to="/shopping-cart">Shopping Cart</Link>
            </div>
        </header>
    );
}

export default Header;
