import React from "react";
import UpNext from "./UpNext";

export default function Aside(props) {
  const VideoList = props.VideoData.map(obj => {
    return <UpNext title={obj.title} channel={obj.channel} img={obj.image} />;
  });
  return <>{VideoList}</>;
}
