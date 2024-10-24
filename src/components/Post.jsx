import { useLocation } from "react-router-dom";
import "./post.css";

const Post = () => {
  const location = useLocation();
  const { postData } = location.state;

  // Ensure that you're rendering individual fields, not the object itself
  return (
    <div className="post-details-container">
      <h1 className="post-title">{postData.title}</h1>
      <p className="post-content">{postData.content}</p>

      <h3 className="comments-heading">Comments</h3>
      <ul className="comments-list">
        {postData.comments && postData.comments.length > 0 ? (
          postData.comments.map((comment, index) => (
            <li key={index} className="comment-item">
              {comment}
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
