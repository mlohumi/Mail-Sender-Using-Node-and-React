import React from "react";

export default function Header() {
  return (
    <div className="fluid-container">
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#00004d" }}
      >
        <span
          className="navbar-text"
          style={{
            color: "white",
            textAlign: "center",
            width: "100%",
            fontSize: "x-large",
            fontWeight: "bold",
          }}
        >
          Vendor Registration Form
        </span>
      </nav>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          {/* <img
            src={
              "http://vincular.thefrend.com/wp-content/uploads/2020/02/new-vin-logo.png"
            }
            width="200"
            height="70"
            className="d-inline-block align-top"
            alt=""
          /> */}
        </div>
      </nav>
    </div>
  );
}
