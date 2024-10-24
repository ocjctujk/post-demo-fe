import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getUrl = "http://localhost:8088/posts";
  const navigate = useNavigate();
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get(getUrl)
      .then((data) => {
        setPosts(data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const openPostHandler = (post) => {
    navigate(`/post/${post._id}`, { state: { postData: post } });
  };

  return (
    <div className="posts-container">
      {posts.toReversed().map((post) => {
        return (
          <div
            className="posts"
            key={post._id}
            onClick={() => {
              openPostHandler(post);
            }}
          >
            <h2 className="posts-title">{post.title}</h2>
            <p className="posts-content">{post.content}</p>
            <button className="show-more-btn">Show More</button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
