import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const getUrl = "http://localhost:8088/";
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

  const deleteHandler = (id) => {
    console.log("Delete this id", id);

    axios
      .delete(`http://localhost:8088/${id}`)
      .then((data) => {
        if (data.data.acknowledged) {
          fetchPosts();
          alert("Post Deleted Succesfully");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="posts-container">
      {posts.map((post) => {
        return (
          <div className="post" key={post._id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <button>Edit</button>
            <button
              onClick={() => {
                deleteHandler(post._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
