import React from "react";
// import Axios from "axios";
import Header from "./components/Header";
import MainVideo from "./components/Video";
import VideoInfo from "./components/VideoInfo";
import CommentSection from "./components/CommentSection";

// //axios Key
// const projectKey = Axios.get(
//   "https://project-1-api.herokuapp.com/register"
// ).then(resp => console.log(resp));
// const apiKey = "9a717c8f-9d92-47f2-a204-ee2b162ac82a";

function App() {
  // let commentArray = [];
  // let commentSection = Axios.get(
  //   "https://project-1-api.herokuapp.com/comments?api_key=" + apiKey
  // ).then(response => {
  //   return commentArray.push(response.data);
  // });
  // console.log(commentArray);
  return (
    <div>
      <Header />
      <MainVideo />
      <VideoInfo />
      <CommentSection />
    </div>
  );
}

export default App;
