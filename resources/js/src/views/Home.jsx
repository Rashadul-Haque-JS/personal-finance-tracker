import React, { useState } from "react";
import LoginForm from "../components/Login";
import RegistrationForm from "../components/Registration";
const Home = () => {
    const [registration, setRegistration] = useState(false);

    const toggleRegistration = () => {
        setRegistration(!registration);
    };

    return (
        <div className="min-h-screen ">
            <header className="bg-gray-800 py-4 relative">
                <div className="bg-black w-full h-2 p-0 m-0 absolute left-0 top-0"></div>
            <div className="mb-3 mt-1">
                <img className="mx-auto h-12 w-auto" src="/fin-logo.png" alt="Workflow"/>
            </div>
                <div className="mx-auto text-white text-center">
                    <h1 className="text-3xl font-semibold text-yellow-300">
                        Personal Financial Tracker
                    </h1>
                    <p className="mt-2">
                        Track your expenses and manage your finances.
                    </p>
                </div>
            </header>
            <div className="container mx-auto py-8">
                <div className="mt-8 w-full">
                    <h2 className="text-xl font-semibold mb-4 text-center">
                        {registration ? "Register" : "Login"}
                    </h2>
                    <div className="w-full flex flex-col justify-center items-center">
                        {!registration &&  <LoginForm registration={registration} toggleRegistration={toggleRegistration}/>}
                        {registration && <RegistrationForm registration={registration} toggleRegistration={toggleRegistration}/>}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
