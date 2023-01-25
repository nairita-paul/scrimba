import React from "react";
import myImage from "../assets/myImage.png";
import "./Info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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
          <span className="btn_text">Email</span>
        </button>
        <button className="info_button linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
          <span className="btn_text">LinkedIn</span>
        </button>
      </div>
    </div>
  );
}
