import React from 'react';


const footerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "8px 16px",
    position: "absolute",
    width: "100%",
    height: "56px",
    left: "-6px",
    top: 0,
    background: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  };

function Footer() {
    return (
        <div style={footerStyle}>
            2021 Made by Team Avatar.
        </div>
    )
}

export default Footer
