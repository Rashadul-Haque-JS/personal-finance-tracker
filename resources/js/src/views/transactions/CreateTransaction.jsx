import React, { useState } from 'react';
import api from '../../api';
const TransactionCreateForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.createTransaction({ amount, description});
    console.log(response);
    setAmount('');
    setDescription('');
  };

  return (
    <div>
      <h2>Create Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TransactionCreateForm;
