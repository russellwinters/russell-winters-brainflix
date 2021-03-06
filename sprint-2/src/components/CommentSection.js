import React from "react";
import Headshot from "../assets/images/Mohan-muruge.jpg";
import CommentBuilder from "./CommentBuilder";

export default class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentArr: props.CommentData.comments,
      mainPost: props.CommentData
    };
  }

  render() {
    console.log(this.state.mainPost.id);

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
          <h3 className="comments-form__heading">3 Comments</h3>
          <div className="comments-form__container">
            <img
              className="comments-form__container-img"
              src={Headshot}
              alt="Headshot"
            />
            <form className="comments-form__container-subdiv">
              <div className="comments-form__container-subdiv-input">
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
              </div>
              <button className="comments-form__container-subdiv-button">
                Comment
              </button>
            </form>
          </div>
        </div>
        {comments}
      </section>
    );
  }
}
