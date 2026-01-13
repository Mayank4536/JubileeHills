// src/components/AuthForm.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

const Login = ({ type }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg w-full max-w-md mx-4 md:mx-0">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {type === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-200">
            {type === 'login' 
              ? 'Please sign in to continue' 
              : 'Sign up to get started'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {type === 'register' && (
            <div>
              <label className="block text-white mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:border-opacity-50"
                placeholder="Enter username"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:border-opacity-50"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:border-opacity-50"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white bg-opacity-30 hover:bg-opacity-40 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            {type === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-white">
            {type === 'login'
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link
              to={type === 'login' ? '/register' : '/login'}
              className="text-white font-semibold hover:underline"
            >
              {type === 'login' ? 'Sign Up' : 'Sign In'}
            </Link>
          </p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white border-opacity-20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-white">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 rounded-lg transition duration-200">
              <FcGoogle className="text-xl mr-2" />
              Google
            </button>
            <button className="flex items-center justify-center w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-3 rounded-lg transition duration-200">
              <AiFillGithub className="text-xl mr-2" />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;