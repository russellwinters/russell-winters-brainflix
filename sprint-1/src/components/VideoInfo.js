// Need to double check the Data structures we want to use in order to make sure that's all correct.

import React from "react";

// Link here doesn't really want to work. Second set of eyes?
// import LikesIcon from "../assets/icons/SVG/Icon-likes.svg";
// import ViewsIcon from "../assets/icons/SVG/Icon-views.svg";

//Object holding all values for each post. Think that's the most reusable form
let thisPost = {
  header: "BMS Rampage: 2018 Highlights",
  creator: "Red Cow",
  timestamp: "12/18/2018",
  views: "1,001,023",
  likes: "110,985",
  post:
    "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time --eight years after his first Red Cow Rampage title."
};

export default function VideoInfo() {
  return (
    <section className="post">
      <div className="post-container">
        <h1 className="post-container__heading">{thisPost.header}</h1>
        <div className="post-container__info">
        <div className="post-container__info-stamps">
          <span className="post-container__info-stamps-creator">
            By {thisPost.creator}
          </span>
          <span className="post-container__info-stamps-date">
            {thisPost.timestamp}
          </span>
        </div>
        <div className="post-container__info-stats">
          <span className="post-container__info-stats-views">
            {/* {ViewsIcon} */}
            {thisPost.views}
          </span>
          <span className="post-container__info-stats-likes">
            {/* {LikesIcon} Where Icon isn't working */}
            {thisPost.likes}
          </span>
        </div>
        </div>
      </div>
      <div className="post-description">{thisPost.post}</div>
    </section>
  );
}
