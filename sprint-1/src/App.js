import React from "react";
import Header from "./components/Header";
import Video from "./components/Video";
import VideoInfo from "./components/VideoInfo";
import CommentSection from "./components/CommentSection";
import MainVideo from "./components/MainVideo";
import SideVideo from "./components/SideVideo";
// import CommentArray from "./components/CommentArray";

function App() {
  return (
    <div>
      <Header />
      <Video />
      <VideoInfo />
      <CommentSection CommentData={MainVideo} />
    </div>
  );
}

export default App;
