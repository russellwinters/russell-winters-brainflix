import React from "react";
import UpNext from "./UpNext";
import { Link } from "react-router-dom";

export default function Aside(props) {
  const postID = props.postInfo.id;
  const VideoList = props.VideoData.map(obj => {
    if (obj.id !== postID) {
      return (
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
