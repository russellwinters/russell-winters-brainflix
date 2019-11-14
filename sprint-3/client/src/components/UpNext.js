import React from "react";

export default function UpNext(props) {
  return (
    <div className="aside-content">
      <div className="aside-content__image-container">
        <img
          className="aside-content__image-container--content"
          src={props.img}
          alt="Queue Poster"
        />
      </div>
      <div className="aside-content__info-container">
        <span className="aside-content__info-container--title">
          {props.title}
        </span>
        <span className="aside-content__info-container--channel">
          {props.channel}
        </span>
      </div>
    </div>
  );
}
