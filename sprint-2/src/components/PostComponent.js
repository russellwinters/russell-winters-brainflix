import React, { Component } from "react";
import Video from "./Video";
import VideoInfo from "./VideoInfo";
import CommentSection from "./CommentSection";
import Aside from "./Aside";
import axios from "axios";

// const axiosRegister = axios
//   .get("https://project-2-api.herokuapp.com/register")
//   .then(response => {
//     console.log(response.data);
//   });
const projectKey = "4d27b0a1-1ba3-4823-a43c-632131c75720";

export default class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MainPost: {},
      VideoQueue: {},
      PostID: ""
    };
  }

  componentDidMount() {
    let videoQueue;
    let mainPost;
    console.log("I am inside componentDidMount()");
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=" + projectKey)
      .then(response => {
        videoQueue = response.data;
        axios
          .get(
            "https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=" +
              projectKey
          )
          .then(response => {
            mainPost = response.data;
            console.log(response.data.id);
            this.setState({
              MainPost: mainPost,
              VideoQueue: videoQueue,
              PostID: response.data.id
            });
          });
      });
  }

  render() {
    console.log(this.state);
    if (Object.keys(this.state.MainPost).length === 0) {
      return (
        <>
          <h1>Loading</h1>
        </>
      );
    } else {
      return (
        <>
          <Video video={this.state.MainPost} />
          <div className="page-content">
            <VideoInfo postInfo={this.state.MainPost} />
            <CommentSection CommentData={this.state.MainPost} />
            <Aside
              VideoData={this.state.VideoQueue}
              postInfo={this.state.MainPost}
              postID={this.state.PostID}
            />
          </div>
        </>
      );
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props.match.params.videoID);
  }
}
