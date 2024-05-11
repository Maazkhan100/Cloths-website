import React from "react";

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <div className="header">
            <img alt="LOGO"></img>
            <div className="options">
                <h3 className="option">SHOP</h3>
                <h3 className="option">CONTACT</h3>
            </div>
        </div>
    )
}

export default Navigation;