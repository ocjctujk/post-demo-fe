import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <h1 className="blogs-title">Maharshi's Blogs</h1>
      <button
        className="add-post-btn"
        onClick={() => {
          window.location.href = "/add";
        }}
      >
        Add Post
      </button>
      <Posts />
    </div>
  );
}

export default App;
