import React from "react";
import Headshot from "../assets/images/Mohan-muruge.jpg";
import CommentBuilder from "./CommentBuilder";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentArr: props.CommentData.comments
    };
  }

  render() {
    console.log(this.state.commentArr);

    // practicing uuid
    const uuidv4 = require("uuid/v4");
    console.log(uuidv4());
    let newComment = this.state.commentArr;
    let comments = newComment.map(comment => {
      return (
        <CommentBuilder
          timestamp={comment.timestamp}
          name={comment.name}
          comment={comment.comment}
          key={comment.id}
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
            <img
              className="comments-form__container-img"
              src={Headshot}
              alt="Headshot"
            />
            <div className="comments-form__container-subdiv">
              <form className="comments-form__container-subdiv-input">
                <span className="comments-form__container-subdiv-input--heading">
                  Join the Conversation
                </span>
                <textarea
                  className="comments-form__container-subdiv-input--content"
                  type="text"
                  name="comment"
                  placeholder="That was easily the most spectacular BMX moment ever."
                  resize="none"
                ></textarea>
              </form>
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
}
