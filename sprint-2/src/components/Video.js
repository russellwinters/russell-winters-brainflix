import React from "react";

export default function MainVideo(props) {
  console.log(props.video);
  const herokuProxy = "https://cors-anywhere.herokuapp.com/";
  const projectKey = "4d27b0a1-1ba3-4823-a43c-632131c75720";
  //Have tried using the heroku proxy, as I thought it's used
  //Tried using api key, but that's not working either.
  //Not really sure what the root of the issue is.
  let Video = /*herokuProxy +*/ `${props.video.video}api_key=${projectKey}`;
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
