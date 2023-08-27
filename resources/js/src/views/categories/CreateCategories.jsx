import React, { useState } from 'react';
import api from '../../api';
const CategoryCreateForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.createCategory({ name});
    console.log(response);
    setName('');
  };

  return (
    <div>
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CategoryCreateForm;
