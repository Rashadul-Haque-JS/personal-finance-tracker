import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import TransactionCreateForm from "./views/transactions/CreateTransaction";
import CategoryCreateForm from "./views/categories/CreateCategories";
import HomePage from "./views/Home";
import Dashboard from "./views/Dashboard";
import TransactionsList from "./views/transactions/Transactions";
import CategoriesList from "./views/categories/Categories";


const AppRoutes = () => {
    const navigate = useNavigate();
    const [redirected, setRedirected] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user && !redirected) {
            navigate("/");
            setRedirected(true); 
           // Set redirected to true to prevent further redirects
        }

        if(redirected){
          window.location.reload()
        }
    }, [navigate]);

    return (
        <div>
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
        </div>
    );
};

export default AppRoutes;
