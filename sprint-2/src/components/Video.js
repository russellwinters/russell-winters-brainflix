import React from "react";

export default function MainVideo(props) {
  // console.log(props.video.video);
  let Video = props.video.video;
  let Poster = props.video.image;

  return (
    <section className="video-container">
      <video className="video-container__content" poster={Poster} controls>
        <source
          className="video-container__content-src"
          src={Video}
          type="video/mp4"
        />
      </video>
    </section>
  );
}
