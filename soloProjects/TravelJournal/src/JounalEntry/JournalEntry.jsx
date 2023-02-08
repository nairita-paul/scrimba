import React from "react";
import "./JournalEntry.css";

export default function JournalEntry(props) {
  return (
    <div className="entry">
      <img src={props.imageUrl} />
      <div className="information">
        <div className="location-meta">
          <img className="location-pin" src={props.locationPinImage}></img>
          <p className="country">{props.country}</p>
          <p className="map-link">{props.googleMapsUrl}</p>
        </div>
        <h1 className="title">{props.title}</h1>
        <p className="date">{props.date}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}
