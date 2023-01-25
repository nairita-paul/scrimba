import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import myImage from "../assets/myImage.png";
import "./Info.css";

export default function Info() {
  return (
    <div className="info_container">
      <img src={myImage} className="info_image"></img>
      <h3 className="info_name">Laura Smith</h3>
      <h4 className="info_title">Frontend Developer</h4>
      <h5 className="info_website">laurasmith.website</h5>
      <div className="info_button_wrap">
        <button className="info_button">
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>
        <button className="info_button">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
