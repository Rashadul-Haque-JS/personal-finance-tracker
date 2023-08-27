
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCreateForm from "./views/users/CreateUsers";
import TransactionCreateForm from "./views/transactions/CreateTransaction";
import CategoryCreateForm from "./views/categories/CreateCategories";
import HomePage from "./views/Home";
const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create-user" element={<UserCreateForm/>}/>
          <Route path="/create-transaction" element={<TransactionCreateForm/>}/>
          <Route path="/create-category" element={<CategoryCreateForm/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
