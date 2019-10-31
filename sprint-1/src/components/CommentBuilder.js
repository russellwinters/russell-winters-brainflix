import React from "react";
import Headshot from "../assets/images/Mohan-muruge.jpg";

//Trying to make this a function that will build a comment DIV

export default function CommentBuilder(props) {
  return (
    <div>
      <div className="img-container">
        <img src={Headshot} alt="Nothing" />
      </div>
      <div className="comment-display">
        <div className="comment-display__stamps">
          <span className="comment-display__stamps-name">{props.name}</span>
          <span className="comment-display__stamps-time">
            {props.timestamp}
          </span>
        </div>
        <div className="comment-display__content">{props.comment}</div>
      </div>
    </div>
  );
}
