import React from "react";
import Header from "./components/Header";
import MainVideo from "./components/Video";
import VideoInfo from "./components/VideoInfo";
import CommentSection from "./components/CommentSection";

function App() {
  let thisPost = {
    header: "BMS Rampage: 2018 Highlights",
    creator: "Red Cow",
    timestamp: "12/18/2018",
    views: "1,001,023",
    likes: "110,985",
    post:
      "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time --eight years after his first Red Cow Rampage title."
  };

  return (
    <div>
      <Header />
      <MainVideo />
      <VideoInfo thisPost={thisPost} />
      <CommentSection />
    </div>
  );
}

export default App;
