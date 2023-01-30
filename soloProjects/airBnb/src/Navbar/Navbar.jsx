import React from "react";
import "./Navbar.css";
import AirbnbLogo from "../assets/airbnbLogo.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={AirbnbLogo}></img>
    </nav>
  );
}
