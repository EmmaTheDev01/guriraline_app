import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import logo from "../../Assests/Logo/logo.png"; // Update with correct path if needed
import { server } from "../../server"; // Update with correct path if needed

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setProcessing(true);

    try {
      await axios.post(`${server}/user/forgot-password`, { email });

      toast.success("Password reset link sent to your email!");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("An error occurred while sending the reset link.");
        console.error(err);
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="logo" className="h-12 w-auto" />
          </div>
          <h2 className="text-center text-2xl font-bold text-[#29625d] mb-6">
            Forgot Password
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Enter your email address and we’ll send you a link to reset your password.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-900 focus:border-green-900 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#29625d] hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
                disabled={processing}
              >
                {processing ? "Sending..." : "Send Reset Link"}
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-sm text-gray-900">
                Remember your password?{" "}
                <Link to="/login" className="font-medium text-green-900 hover:text-green-500">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
