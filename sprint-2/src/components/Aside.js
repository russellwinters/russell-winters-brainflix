import React from "react";
import UpNext from "./UpNext";

export default function Aside(props) {
  // console.log(props.postInfo.id);
  const postID = props.postInfo.id;
  const VideoList = props.VideoData.map(obj => {
    if (obj.id !== postID) {
      return (
        <UpNext
          title={obj.title}
          channel={obj.channel}
          img={obj.image}
          key={obj.id}
        />
      );
    }
  });
  return (
    <div className="aside">
      <h3 className="aside-header">Up Next</h3>
      {VideoList}
    </div>
  );
}
