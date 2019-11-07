import React from "react";
import Headshot from "../assets/images/Mohan-muruge.jpg";

//Trying to make this a function that will build a comment DIV

export default function CommentBuilder(props) {
  // console.log(props.key);
  function epochTimeFunction(num) {
    let output = new Date(num);
    let dateStamp =
      output.getMonth() +
      1 +
      "/" +
      output.getDate() +
      "/" +
      output.getFullYear();
    return dateStamp;
  }

  return (
    <div className="builder">
      <div className="builder__img-container">
        <img
          className="builder__img-container--content"
          src={Headshot}
          alt="Nothing"
        />
      </div>
      <div className="builder__comment-display">
        <div className="builder__comment-display--stamps">
          <span className="builder__comment-display--stamps-name">
            {props.name}
          </span>
          <span className="builder__comment-display--stamps-time">
            {epochTimeFunction(props.timestamp)}
          </span>
        </div>
        <div className="builder__comment-display--content">{props.comment}</div>
      </div>
    </div>
  );
}
