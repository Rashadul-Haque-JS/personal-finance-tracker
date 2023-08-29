
import React, {useState}from "react";
import {useNavigate} from "react-router-dom";
import api from "../api";
const LoginForm = ({ registration, toggleRegistration}) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const response = await api.login(formData);
        if (response.status === 200) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/dashboard');
            window.location.reload();
        }
        console.log(response);
       setFormData({
        email: "",
        password: "",
    })
    }

    return (
        <form className="w-full max-w-sm px-4" onSubmit={handleLoginSubmit}>
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
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    {registration ? "Register" : "Sign In"}
                </button>
                <span
                    className="text-blue-500 hover:underline focus:outline-none"
                    onClick={toggleRegistration}
                >
                    {registration
                        ? "Already have an account? Sign In"
                        : "Don't have an account? Register"}
                </span>
            </div>
        </form>
    );
};

export default LoginForm;
