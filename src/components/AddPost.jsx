import React, { useState } from "react";
import "./addPost.css";
import axios from "axios";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: You can handle the post creation here
    const newPost = { title, content };
    console.log("New Post:", newPost);

    axios
      .post("http://localhost:8088/posts", newPost)
      .then((data) => {
        console.log(data);
        alert("Post Added Successfully");
        setTitle("");
        setContent("");

        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-post-container">
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter post title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="Enter post content"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
