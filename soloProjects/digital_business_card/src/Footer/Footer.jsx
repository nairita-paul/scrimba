import React from "react";
import Twitter_Icon from "../assets/Twitter_Icon.png";
import Facebook_Icon from "../assets/Facebook_Icon.png";
import Instagram_Icon from "../assets/Instagram_Icon.png";
import GitHub_Icon from "../assets/GitHub_Icon.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img src={Twitter_Icon}></img>
      <img src={Facebook_Icon}></img>
      <img src={Instagram_Icon}></img>
      <img src={GitHub_Icon}></img>
    </div>
  );
}
