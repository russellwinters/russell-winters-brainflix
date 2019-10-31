import React from "react";
import Headshot from "../assets/images/Mohan-muruge.jpg";
import CommentBuilder from "./CommentBuilder";

export default function CommentSection(props) {
  let newComment = props.CommentData.comments;
  let comments = newComment.map(comment => {
    return (
      <CommentBuilder
        timestamp={comment.timestamp}
        name={comment.name}
        comment={comment.comment}
      />
    );
  });
  return (
    <section className="comments">
      <div className="comments-form">
        <h3 className="comments-form__heading">
          3{/* The 3 will be props.propName.length*/} Comments
        </h3>
        <div className="comments-form__container">
          <img className="comments-form__container-img" src={Headshot} />
          <div className="comments-form__container-subdiv">
            <div className="comments-form__container-subdiv-input">
              <span className="comments-form__container-subdiv-input--heading">
                Join the Conversation
              </span>
              <input
                className="comments-form__container-subdiv-input--content"
                type="text"
                placeholder="That was easily the most spectacular BMX moment ever."
              ></input>
            </div>
            <button className="comments-form__container-subdiv-button">
              Comment
            </button>
          </div>
        </div>
      </div>
      {comments}
    </section>
  );
}
