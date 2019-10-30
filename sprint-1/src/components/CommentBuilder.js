import React from "react";
import Axios from "axios";
import Headshot from "../assets/images/Mohan-muruge.jpg";
//Tried to update comment section through this function, which is dealing with all the axios stuff and comment building.

export default function CommentBuilder() {
  //axios Key
  const projectKey = Axios.get(
    "https://project-1-api.herokuapp.com/register"
  ).then(resp => console.log(resp));
  const apiKey = "9a717c8f-9d92-47f2-a204-ee2b162ac82a";

  // Create Array from Key
  let commentArray = [];
  let commentSection = Axios.get(
    "https://project-1-api.herokuapp.com/comments?api_key=" + apiKey
  ).then(response => {
    commentArray.push(response.data);
  });
  console.log(commentArray);
  commentArray.map((obj, index) => {
    return (
      <div key={index} className="comments__posts-container">
        <div className="comments__posts-container-image">
          <img
            className="comments__posts-container-image-content"
            src={Headshot}
          />
        </div>
        <div className="comments__posts-container-form">
          <div className="comments__posts-container-form--id">
            <span className="comments__posts-container-form--id-namestamp">
              {obj.name}
            </span>
            <span className="comments__posts-container-form--id-timestamp">
              {obj.timestamp}
            </span>
          </div>
          <div className="comments__posts-container-form--output">
            {obj.comment}
          </div>
        </div>
      </div>
    );
  });
}
