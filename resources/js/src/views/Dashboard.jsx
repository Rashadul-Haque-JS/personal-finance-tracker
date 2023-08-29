import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

const Dashboard = () => {
    const [incomeTotal, setIncomeTotal] = useState(50000);
    const [expensesTotal, setExpensesTotal] = useState(42000);
    const [categoryIncome, setCategoryIncome] = useState([
        { name: "Job", value: 17000 },
        { name: "Business", value: 15000 },
        { name: "Others", value: 18000 },
    ]);
    const [categoryExpenses, setCategoryExpenses] = useState([
        { name: "Category A", value: 15000 },
        { name: "Category B", value: 5000 },
        { name: "Category C", value: 12000 },
        { name: "Category D", value: 4000 },
        { name: "Category E", value: 6000 },
    ]);

    useEffect(() => {
        // Simulate API call to fetch category data
        fetch("https://api.example.com/categories")
            .then((response) => response.json())
            .then((data) => {
                const categoryIncomeData = data.categories.map((category) => ({
                    name: category.name,
                    value: category.totalIncome,
                }));
                const categoryExpensesData = data.categories.map(
                    (category) => ({
                        name: category.name,
                        value: category.totalExpenses,
                    })
                );

                setCategoryIncome(categoryIncomeData);
                setCategoryExpenses(categoryExpensesData);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });

        // Simulate API call to fetch total income and expenses data
        fetch("https://api.example.com/finance")
            .then((response) => response.json())
            .then((data) => {
                setIncomeTotal(data.totalIncome);
                setExpensesTotal(data.totalExpenses);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4 min-h-screen w-full max-w-3/4 px-4">
            <h2 className="text-2xl text-center font-semibold mb-4 ">
              {new Date().getFullYear()}
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
            <div className="p-6 sm:px-0 xs:px-0 rounded shadow-md mt-12">
                <h3 className="text-lg font-semibold mb-4">By Category</h3>
                <div className="flex justify-evenly items-center sm:flex-col xs:flex-col mt-2 bg-gray-200 min-h-[320px]">
                    <div className="mt-8">
                        <h4>Income</h4>
                        <PieChart width={300} height={200}>
                            <Pie
                                dataKey="value"
                                data={categoryIncome}
                                cx="50%"
                                cy="50%"
                                outerRadius={60}
                                fill="#8884d8"
                                label={({ name, value }) =>
                                    `${name}: $${value}`
                                }
                            >
                                {categoryIncome.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                    <div className="mt-8">
                        <h4>Expenses</h4>
                        <PieChart width={300} height={200}>
                            <Pie
                                dataKey="value"
                                data={categoryExpenses}
                                cx="50%"
                                cy="50%"
                                outerRadius={60}
                                fill="#8884d8"
                                label={({ name, value }) =>
                                    `${name}: $${value}`
                                }
                            >
                                {categoryExpenses.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
