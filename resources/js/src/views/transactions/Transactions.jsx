import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../api";

const TransactionsList = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const fetchTransactions = async () => {
            const response = await api.getTransactions(user.id);
            if (response.status === 200) {
                setTransactions(response.data.transactions);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-semibold text-center mb-4">
                    Transactions
                </h1>
                <table className="w-full border-collapse border bg-white shadow-md">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Date</th>
                            <th className="border p-2">Description</th>
                            <th className="border p-2">Amount</th>
                            <th className="border p-2">Ctg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border">
                                <td className="border p-2">
                                    {transaction.created_at
                                        ? new Date(transaction.created_at)
                                              .toISOString()
                                              .slice(0, 10)
                                        : ""}
                                </td>
                                <td className="border p-2">
                                    {transaction.description}
                                </td>
                                <td className="border p-2">
                                    <span
                                        className={
                                            transaction.transaction_type ===
                                            "income"
                                                ? "text-emerald-400"
                                                : "text-red-500"
                                        }
                                    >
                                        {transaction.transaction_type ===
                                        "income"
                                            ? "+"
                                            : "-"}
                                        {transaction.amount}
                                    </span>
                                </td>

                                <td className="border p-2">
                                    {transaction.category_id}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link
                to={"/create-transaction"}
                className="fixed right-6 bottom-6 shadow-md bg-gray-800 hover:bg-black text-white rounded-full p-2"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default TransactionsList;
