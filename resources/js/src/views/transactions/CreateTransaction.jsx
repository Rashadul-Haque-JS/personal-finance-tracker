import React, { useEffect, useState } from "react";
import Select from "react-select";
import api from "../../api";

const TransactionCreateForm = () => {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [userId, setUserId] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const { id } = JSON.parse(localStorage.getItem("user"));
        setUserId(id);
        const fetchCategory = async () => {
            const response = await api.getCategories();
            console.log(response);
            setCategories(response.data.categories);
        };
        fetchCategory();
    }, []);

    const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!userId || !selectedCategory) {
            return;
        }

        const response = await api.createTransaction({
            user_id: userId,
            category_id: selectedCategory.value,
            amount,
            description,
            transaction_type: transactionType,
        });
        console.log(response);
        setAmount("");
        setDescription("");
        setTransactionType("");
        setSelectedCategory(null);
    };

    return (
        <div className="min-h-screen">
            <h2 className="text-2xl text-center font-semibold mt-8 mb-4">
                Create Transaction
            </h2>
            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm px-4 m-12"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="transaction_type"
                        >
                            Transaction Type
                        </label>
                        <Select
                            options={[
                                { value: "income", label: "Income" },
                                { value: "expense", label: "Expense" },
                            ]}
                            value={
                                transactionType
                                    ? {
                                          value: transactionType,
                                          label: transactionType,
                                      }
                                    : null
                            }
                            onChange={(selectedOption) =>
                                setTransactionType(selectedOption.value)
                            }
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Amount
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Amount"
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Description
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Description"
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="category"
                        >
                            Category
                        </label>
                        <Select
                            options={categories.map((category) => ({
                                value: category.id,
                                label: category.name,
                            }))}
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TransactionCreateForm;
