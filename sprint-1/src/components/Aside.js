import React from "react";
import UpNext from "./UpNext";

export default function Aside(props) {
  const VideoList = props.VideoData.SideVideo.map(obj => {
    return <UpNext title={obj.title} channel={obj.channel} img={obj.image} />;
  });
  return (
    <div className="aside">
      <h3 className="aside-header">Up Next</h3>
      {VideoList}
    </div>
  );
}
