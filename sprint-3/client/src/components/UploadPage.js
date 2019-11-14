import React, { Component } from "react";
import videoClip from "../assets/images/Upload-video-preview.jpg";

export default class UploadPage extends Component {
  render() {
    return (
      <>
        <h1 className="upload-title">Upload Video</h1>
        <form className="form">
          <div className="form-flex">
            <div className="form-flex__thumbnail">
              <h3 className="form-heading">Video Thumbnail</h3>
              <div className="form-flex__thumbnail--img-container">
                <img
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
                  name="video-title"
                  className="form-flex-content__title-input--content"
                  placeholder="Add a title to your video"
                ></input>
              </div>
              <div className="form-flex-content__description-input">
                <h3 className="form-heading">Add a Video Description</h3>
                <textarea
                  type="text"
                  className="form-flex-content__description-input--content"
                  name="video-description"
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
