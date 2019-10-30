import React from "react";
import Headshot from "../assets/images/Mohan-muruge.jpg";

export default function CommentSection(props) {
  const comments = props.commentData.map((obj, index) => {
    return (
      <div key={index} className="comments__posts-container">
        <div className="comments__posts-container-image">
          <img
            className="comments__posts-container-image-content"
            src={Headshot}
          />
        </div>
        <div className="comments__posts-container-form">
          <div className="comments__posts-container-form--id">
            <span className="comments__posts-container-form--id-namestamp">
              {obj.name}
            </span>
            <span className="comments__posts-container-form--id-timestamp">
              {obj.timestamp}
            </span>
          </div>
          <div className="comments__posts-container-form--output">
            {obj.comment}
          </div>
        </div>
      </div>
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
      <div className="comments__posts">{comments}</div>
    </section>
  );
}
