import React from "react";
import { Link } from "react-router-dom";
const CategoriesList = () => {
    return (
        <div className="min-h-screen">
            <h1 className="text-2xl text-center font-semibold mb-4 mt-3 ">
                Categories
            </h1>

            <Link to={"/create-category"}  className="fixed right-6 bottom-6 shadow-md bg-gray-800 hover:bg-black text-white rounded-full p-2">
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

export default CategoriesList;
