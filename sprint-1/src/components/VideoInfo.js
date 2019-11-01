import React from "react";
import LikesIcon from "../assets/icons/SVG/Icon-likes.svg";
import ViewsIcon from "../assets/icons/SVG/Icon-views.svg";

export default function VideoInfo(props) {
  let MainInfo = props.postInfo.MainVideo;

  return (
    <section className="post">
      <div className="post-container">
        <h1 className="post-container__heading">{MainInfo.title}</h1>
        <div className="post-container__info">
          <div className="post-container__info-stamps">
            <span className="post-container__info-stamps-creator">
              By {MainInfo.channel}
            </span>
            <span className="post-container__info-stamps-date">
              {MainInfo.timestamp}
            </span>
          </div>
          <div className="post-container__info-stats">
            <span className="post-container__info-stats-views">
              <img src={ViewsIcon} />
              {MainInfo.views}
            </span>
            <span className="post-container__info-stats-likes">
              <img src={LikesIcon} />
              {MainInfo.likes}
            </span>
          </div>
        </div>
      </div>
      <div className="post-description">{MainInfo.description}</div>
    </section>
  );
}
