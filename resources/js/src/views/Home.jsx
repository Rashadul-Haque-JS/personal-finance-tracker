import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen" >
      <header className="bg-blue-600 py-4">
        <div className="container mx-auto text-white text-center">
          <h1 className="text-3xl font-semibold">Personal Financial Tracker</h1>
          <p className="mt-2">Track your expenses and manage your finances.</p>
        </div>
      </header>

      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your finance summary cards here */}
          <div className="bg-red-200     p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Total Income</h2>
            <p className="text-2xl">$5,000</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Total Expenses</h2>
            <p className="text-2xl">$3,000</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Net Balance</h2>
            <p className="text-2xl">$2,000</p>
          </div>
        </div>

        {/* Add additional sections and components here */}
      </div>
    </div>
  );
};

export default Home;
