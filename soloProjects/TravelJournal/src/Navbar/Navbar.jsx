import React from "react";
import "./Navbar.css";
import worldimg from "../assets/world.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={worldimg} />
      <p className="navbar--text">My Travel Journal</p>
    </div>
  );
}
