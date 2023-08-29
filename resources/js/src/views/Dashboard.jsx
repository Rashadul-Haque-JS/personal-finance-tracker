import React, { useState, useEffect } from "react";

const Dashboard = () => {
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expensesTotal, setExpensesTotal] = useState(0);

    useEffect(() => {
        // Simulate API call to fetch income and expenses data
        fetch("https://api.example.com/finance")
            .then((response) => response.json())
            .then((data) => {
                // Calculate total income and expenses
                let totalIncome = 0;
                let totalExpenses = 0;

                data.income.forEach((item) => {
                    totalIncome += item.amount;
                });

                data.expenses.forEach((item) => {
                    totalExpenses += item.amount;
                });

                setIncomeTotal(totalIncome);
                setExpensesTotal(totalExpenses);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4 min-h-screen w-full max-w-3/4 px-4">
            <h2 className="text-2xl text-center font-semibold mb-4 ">
                Dashboard
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-6 w-full">
                <div className="bg-green-200 p-6 rounded shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Total Income</h3>
                    <p className="text-2xl">${incomeTotal}</p>
                </div>
                <div className="bg-red-200 p-6 rounded shadow-md">
                    <h3 className="text-lg font-semibold mb-4">
                        Total Expenses
                    </h3>
                    <p className="text-2xl">${expensesTotal}</p>
                </div>
                <div className="bg-blue-200 p-6 rounded shadow-md">
                    <h3 className="text-lg font-semibold mb-4">Net Balance</h3>
                    <p className="text-2xl">${incomeTotal - expensesTotal}</p>
                </div>
            </div>

            {/* Add more sections and components as needed */}
        </div>
    );
};

export default Dashboard;
