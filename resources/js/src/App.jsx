import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TransactionCreateForm from "./views/transactions/CreateTransaction";
import CategoryCreateForm from "./views/categories/CreateCategories";
import HomePage from "./views/Home";
import Dashboard from "./views/Dashboard";
import TransactionsList from "./views/transactions/Transactions";
import CategoriesList from "./views/categories/Categories";
const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/create-transaction"
                        element={<TransactionCreateForm />}
                    />
                    <Route
                        path="/create-category"
                        element={<CategoryCreateForm />}
                    />
                    <Route path="/transaction" element={<TransactionsList />} />
                    <Route path="/category" element={<CategoriesList />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
