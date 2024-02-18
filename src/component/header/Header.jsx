import React from "react";
import "../header/header.css";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="left_header">
                    <span>ABOUT</span>
                    <span>SERVICES</span>
                    <span>EVENTS</span>
                </div>
                <div className="middle_header">
                    <a href="https://24carrots.com/">
                        <div className="heading">
                            <h2>24 CARROTS</h2>
                            <p>CATERING & EVENTS</p>
                        </div>
                    </a>
                </div>
                <div className="right_header">
                    <span>VENUES</span>
                    <span>CAREERS</span>
                    <button>GET IN TOUCH</button>
                </div>
            </div>
        </>
    );
};

export default Header;
