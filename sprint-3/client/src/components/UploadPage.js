import React, { Component } from "react";
import axios from "axios";
import videoClip from "../assets/images/Upload-video-preview.jpg";

export default class UploadPage extends Component {
  uploadVideo = event => {
    event.preventDefault();
    //axios to post page data
    console.log(event.target.title.value);
    console.log(event.target.description.value);
    console.log("../assets/images/Upload-video-preview.jpg");
    //Adding a fake channel so that it will display effectively on the video queue
    let newUpload = {
      title: event.target.title.value,
      description: event.target.description.value,
      image: "../assets/images/Upload-video-preview.jpg",
      channel: "Anonymous User"
    };

    axios
      .post("http://localhost:5000/api/mainvideos", newUpload)
      .then(console.log("Success"));
  };

  render() {
    return (
      <>
        <h1 className="upload-title">Upload Video</h1>
        <form
          className="form"
          action="localhost:5000/api/mainvideos"
          method="POST"
          onSubmit={this.uploadVideo}
        >
          <div className="form-flex">
            <div className="form-flex__thumbnail">
              <h3 className="form-heading">Video Thumbnail</h3>
              <div className="form-flex__thumbnail--img-container">
                <input
                  type="image"
                  name="image"
                  src={videoClip}
                  alt="Video Thumbnail"
                  className="form-flex__thumbnail--img-container-content"
                />
              </div>
            </div>
            <div className="form-flex-content">
              <div className="form-flex-content__title-input">
                <h3 className="form-heading">Title Your Video</h3>
                <input
                  type="text"
                  name="title"
                  className="form-flex-content__title-input--content"
                  placeholder="Add a title to your video"
                ></input>
              </div>
              <div className="form-flex-content__description-input">
                <h3 className="form-heading">Add a Video Description</h3>
                <textarea
                  type="text"
                  className="form-flex-content__description-input--content"
                  name="description"
                  placeholder="Add a description of your Video"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="button-flex">
            <button className="button-flex__content button-flex__primary">
              Publish
            </button>
            <button className="button-flex__content">Cancel</button>
          </div>
        </form>
      </>
    );
  }
}
