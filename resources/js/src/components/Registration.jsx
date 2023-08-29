import React, {useState}from "react";
import api from "../api";
const RegistrationForm = ({ toggleRegistration}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [message, setMessage] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRegiSubmit = async (e) => {
        e.preventDefault();

        if(formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }
        const response = await api.createUser(formData);
        console.log(response);
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
        setMessage("")
    }
    return (
        <form className="w-full max-w-sm px-4" onSubmit={handleRegiSubmit}>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                >
                    Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                >
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="confirmPassword"
                >
                    Confirm Password
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    onChange={handleChange}
                    required
                />
            </div>
            {message && (
                <div className="mb-4">
                    <p className="text-red-500 text-xs italic">{message}</p>
                </div>
            )}
            <div className="flex items-center justify-between">
                <button
                    className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Register
                </button>
                <span
                    className="text-blue-500 hover:underline focus:outline-none"
                    onClick={toggleRegistration}
                >
                    Already have an account? Sign In
                </span>
            </div>
        </form>
    );
};

export default RegistrationForm;
