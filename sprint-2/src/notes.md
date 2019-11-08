To do:

1. Change state in CommentSection to that prop of the comments, then create a function that's going to post to API then re-fetch the data, set state to the updated APi comments. Also will have to change the number of comments to that property.length.
2. Change Upload button link and styling based on link around button.
3. Upload videos page
4. Diving deeper: Post comments

Progress on Diving Deeper:

1. Comment Section is now class component.
2. Installed UUID so that I can generate keys for each of the posted comments.

3. Need to make onCLick function for form that will:
   - greate object from for that contains{ comment: (event.target.comment.value), id: uuidv4(), name: "annonymous", timestamp: epochtime}
   - post object to api
   - get api data again to update component's state.
