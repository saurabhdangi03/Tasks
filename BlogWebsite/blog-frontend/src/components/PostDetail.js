import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './styles/PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blog/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/blog/posts/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>By: {post.author}</p>
      <Link to={`/update/${post._id}`}>Edit Post</Link>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
};

export default PostDetail;
