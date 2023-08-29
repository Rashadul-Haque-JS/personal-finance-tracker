import React, { useState } from "react";
import api from "../../api";
const CategoryCreateForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await api.createCategory({ name });
        console.log(response);
        setName("");
    };

    return (
        <div className="min-h-screen">
            <h2 className="text-2xl text-center font-semibold mt-8 mb-4 ">
                Create Category
            </h2>
            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm px-4 m-12"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Category Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="Name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
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

export default CategoryCreateForm;
