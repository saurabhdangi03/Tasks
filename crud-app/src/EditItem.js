import React, { useState, useEffect } from 'react';

const EditItem = ({ currentItem, updateItem, setEditing }) => {
  const [item, setItem] = useState(currentItem);

  useEffect(() => {
    setItem(currentItem);
  }, [currentItem]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem(item);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
      <button onClick={() => setEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditItem;
