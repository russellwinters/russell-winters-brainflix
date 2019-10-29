import React from "react";

// Link here doesn't really want to work. Second set of eyes?
// import LikesIcon from "../assets/icons/SVG/Icon-likes.svg";
// import ViewsIcon from "../assets/icons/SVG/Icon-views.svg";

export default function VideoInfo(props) {
  return (
    <section className="post">
      <div className="post-container">
        <h1 className="post-container__heading">{props.thisPost.header}</h1>
        <div className="post-container__info">
          <div className="post-container__info-stamps">
            <span className="post-container__info-stamps-creator">
              By {props.thisPost.creator}
            </span>
            <span className="post-container__info-stamps-date">
              {props.thisPost.timestamp}
            </span>
          </div>
          <div className="post-container__info-stats">
            <span className="post-container__info-stats-views">
              {/* {ViewsIcon} */}
              {props.thisPost.views}
            </span>
            <span className="post-container__info-stats-likes">
              {/* {LikesIcon} Where Icon isn't working */}
              {props.thisPost.likes}
            </span>
          </div>
        </div>
      </div>
      <div className="post-description">{props.thisPost.post}</div>
    </section>
  );
}
