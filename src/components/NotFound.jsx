import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <img
          src="https://via.placeholder.com/400x300?text=404+Not+Found"
          alt="Not Found"
          className="w-1/2 mx-auto rounded-lg shadow-lg mb-6"
        />
        <button
          onClick={() => (navigate('/'))}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
