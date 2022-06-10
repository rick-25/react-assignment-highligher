import React from "react";
import '../../css/header.css';

const Header = ({children, justify}) => {
    return (
        <header className="header" style={{justifyContent: justify}}>
            {children}
        </header>
    )
}

export default Header;  