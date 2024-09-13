import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './styles/UpdatePost.css';

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    axios.get(`https://tasks-c17s.vercel.app/api/blog/posts/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
        setAuthor(response.data.author);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://tasks-c17s.vercel.app/api/blog/posts/${id}`, { title, content, author });
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className= "update-post-container">
      <h2>Update Post</h2>
      <form onSubmit={handleSubmit} className="update-post-form">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
