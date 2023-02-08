import React from "react";
import "./Hero.css";

export default function Hero(props) {
  return (
    <div className="section">
      <div className="hero">
        <img className="hero--left" src={props.imageUrl} />
        <div className="hero--right">
          <div className="hero--right-top">
            <img
              className="hero--right-top-location-pin"
              src={props.locationPinImage}
            ></img>
            <p className="hero--right-top-location">{props.location}</p>
            <p className="hero--right-top-map">{props.googleMapsUrl}</p>
          </div>
          <h1 className="hero--right-title">{props.title}</h1>
          <p className="hero--right-date">{props.date}</p>
          <p className="hero--right-details">{props.description}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
