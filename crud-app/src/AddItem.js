import React, { useState } from 'react';

const AddItem = ({ addItem }) => {
  const [item, setItem] = useState({ name: '' });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.name.trim()) {
      addItem(item);
      setItem({ name: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Add new item"
        value={item.name}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
