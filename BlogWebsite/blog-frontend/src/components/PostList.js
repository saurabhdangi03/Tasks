import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://blogweb-pearl.vercel.app/api/blog/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="post-list-container">
      <ul className="post-list">
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
            </Link>
              <p>{post.content.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
