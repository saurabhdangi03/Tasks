import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './styles/PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://tasks-c17s.vercel.app/api/blog/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://tasks-c17s.vercel.app/api/blog/posts/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail-container">
      <div className="card-Detail">
        <h1 className="post-title">{post.title}</h1>
        <p className="author">By: {post.author}</p>
        <p className="post-content">{post.content}</p>
        <div className="post-footer">
          <Link to={`/update/${post._id}`} className="btn">Edit Post</Link>
          <button onClick={handleDelete}>Delete Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
