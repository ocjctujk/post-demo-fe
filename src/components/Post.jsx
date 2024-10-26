import { useLocation } from "react-router-dom";
import "./post.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Post = () => {
  const location = useLocation();
  const { postData } = location.state;
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8088/posts/${postData._id}/comments`)
      .then((data) => {
        setComments(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [postData._id]);

  const addCommentHandler = () => {
    if (comment === "") {
      return;
    }
    let commentObj = {
      postId: postData._id,
      content: comment.trim(),
    };
    axios.post(`http://localhost:8088/comments`, commentObj).then(() => {
      setComments([...comments,commentObj]);
      setComment("");
    });
  };

  // Ensure that you're rendering individual fields, not the object itself
  return (
    <div className="post-details-container">
      <h1 className="post-title">{postData.title}</h1>
      <p className="post-content">{postData.content}</p>

      <h3 className="comments-heading">Comments</h3>

      <div className="add-comment">
        <input
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button className="add-comment-btn" onClick={addCommentHandler}>
          Add Comment
        </button>
      </div>

      <ul className="comments-list">
        {comments && comments.length > 0 ? (
          comments.toReversed().map((comment, index) => (
            <li key={index} className="comment-item">
              {comment.content}
            </li>
          ))
        ) : (
          <li className="no-comments">No comments available</li>
        )}
      </ul>
    </div>
  );
};

export default Post;
