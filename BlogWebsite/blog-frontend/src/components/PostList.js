import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blog/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Blog Posts</h2>
      <Link to="/create">Create New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
