import axios from "axios";
const uuidv4 = require("uuid/v4");

const submitPost = event => {
  let postTime = new Date();
  let newComment = {
    timestamp: postTime.getTime(),
    name: "Guest of Page",
    id: uuidv4()
  };

  const projectKey = "4d27b0a1-1ba3-4823-a43c-632131c75720";
  const postID = this.state.mainPost.id;

  newComment.comment = event.target.comment.value;

  axios
    .post(
      `https://project-2-api.herokuapp.com/videos/${postID}?api_key=${projectKey}`,
      { newComment }
    )
    .then(
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${postID}?api_key=${projectKey}`
        )
        .then(response => {
          this.setState({
            commentArr: response.data.CommentData.comments
          });
        })
    );
};

export default submitPost;
