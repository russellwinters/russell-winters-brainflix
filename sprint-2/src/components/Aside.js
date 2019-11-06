import React from "react";
import UpNext from "./UpNext";
import { Link } from "react-router-dom";

export default function Aside(props) {
  console.log(props.VideoData[0].id);
  const postID = props.postInfo.id;
  const VideoList = props.VideoData.map(obj => {
    if (obj.id !== postID) {
      return (
        //This link needs to use the props.match.url or .path method then obj.id.
        //Need onClick function inside that Link. Function from notes.
        <Link to={`/videos/${obj.id}`} key={obj.id}>
          <UpNext title={obj.title} channel={obj.channel} img={obj.image} />
        </Link>
      );
    }
  });
  return (
    <div className="aside">
      <h3 className="aside-header">Up Next</h3>
      {VideoList}
    </div>
  );

  //Thinking here is where I want to make a function that changes state on componentdidMount();
}
