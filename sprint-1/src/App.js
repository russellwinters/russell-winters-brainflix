import React from "react";
import Header from "./components/Header";
import Video from "./components/Video";
import VideoInfo from "./components/VideoInfo";
import CommentSection from "./components/CommentSection";
import Aside from "./components/Aside";
import MainVideo from "./components/MainVideo";
import SideVideo from "./components/SideVideo";


class App extends React.Component {
  state = {
    MainPost: { MainVideo },
    VideoQueue: { SideVideo }
  };

  render() {
    return (
      <div>
        <Header />
        <Video video={this.state.MainPost} />
        <div className="page-content"> {/* Div is here so that I can style the section on desktop version*/}
          <VideoInfo postInfo={this.state.MainPost} />
          <CommentSection CommentData={this.state.MainPost} />
          <Aside VideoData={this.state.VideoQueue} />
        </div>
      </div>
    );
  }
}
export default App;
