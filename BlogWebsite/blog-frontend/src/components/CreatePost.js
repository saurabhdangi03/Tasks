import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles/CreatePost.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('https://blogweb-pearl.vercel.app/api/blog/create', { title, content, author });
  //     navigate('/');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
      author
    };

    try {
      const response = await axios.post('https://blogweb-pearl.vercel.app/', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Post created:', response.data);
      // Clear form or redirect after successful post creation
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Failed to create the post. Please try again.');
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
