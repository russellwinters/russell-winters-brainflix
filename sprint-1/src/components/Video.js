import React from "react";
import OurVideo from "../assets/video/sample-video.mp4";

export default function MainVideo() {
  return (
    <section className="video-container">
      <video className="video-container__content" poster="" controls>
        <source
          className="video-container__content-src"
          src={OurVideo}
          type="video/mp4"
        />
      </video>
    </section>
  );
}
