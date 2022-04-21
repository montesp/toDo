import React from "react";

function Header(props) {
    return(
        <header className="header">
            {props.children}
        </header>
    )
}

export { Header };