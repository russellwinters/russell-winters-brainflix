import React from "react";

export default function UpNext(props) {
  console.log(props);
  return (
    <div>
      <div className="image-container">
        <img src={props.image} />
      </div>
      <div className="info-container">
        <span className="info-container__title">{props.title}</span>
        <span className="info-container__channel">{props.channel}</span>
      </div>
    </div>
  );
}
