import React from "react";
import { Link } from "react-router-dom";

export default function UpNext(props) {
  console.log(props);
  return (
    <Link to={`/video/${props.id}`}>
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
    </Link>
  );
}
