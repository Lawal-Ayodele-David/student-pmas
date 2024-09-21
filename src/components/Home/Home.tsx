import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Student Project Management System</h1>
      <p className="text-lg text-gray-600 mb-8">
        A platform to manage student projects, submissions, and collaborations with supervisors.
      </p>
      <div>
        <a
          href="/login"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
