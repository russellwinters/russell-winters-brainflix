import React from "react";
import Header from "./components/Header";
import Video from "./components/Video";
import VideoInfo from "./components/VideoInfo";
import CommentSection from "./components/CommentSection";
import MainVideo from "./components/MainVideo";
// import SideVideo from "./components/SideVideo";
// import Aside from "./components/Aside";

function App() {
  return (
    <div>
      <Header />
      <Video />
      <div className="page-content">
        <VideoInfo />
        <CommentSection CommentData={MainVideo} />
        {/* <Aside VideoData={SideVideo} /> */}
      </div>
    </div>
  );
}

export default App;
