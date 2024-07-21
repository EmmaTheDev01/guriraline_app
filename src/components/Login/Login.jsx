import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import logo from "../../Assests/Logo/logo.png";
import { server } from "../../server";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${server}/user/login-user`,
        { email, password },
        { withCredentials: true }
      );

      const token = res.data.token;
      Cookies.set("token", token, { expires: 90 });

      toast.success("Login Success!");
      navigate("/");
      window.location.reload();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("An error occurred during login.");
        console.error(err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="logo" className="h-12 w-auto" />
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-900 focus:border-green-900 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-900 focus:border-green-900 sm:text-sm"
                />
                <span className="absolute right-2 top-2">
                  {visible ? (
                    <AiOutlineEye
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="cursor-pointer"
                      size={20}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-green-900 focus:ring-green-900 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-green-900 hover:text-green-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#29625d] hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-900"
              >
                Sign in
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-sm text-gray-900">
                Don't have an account?{" "}
                <Link to="/sign-up" className="font-medium text-green-900 hover:text-green-500">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
