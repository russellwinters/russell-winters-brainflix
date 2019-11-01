import React from "react";
import OurVideo from "../assets/video/sample-video.mp4";
import Poster from "../assets/images/video-list-0.jpg";

export default function MainVideo() {
  return (
    <section className="video-container">
      <video className="video-container__content" poster={Poster} controls>
        <source
          className="video-container__content-src"
          src={OurVideo}
          type="video/mp4"
        />
      </video>
    </section>
  );
}
