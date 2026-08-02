import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { isValidEmail } from "../utils/validators";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Login() {
    const navigate = useNavigate();
    // Context se login function
    const { login } = useAuth();
    // Login form state
    const [formData, setFormData] = useState({ email: "", password: "", });
    // Error state
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    // Input values handle
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError("");
    };
    // Form submit handle
    const handleSubmit = (e) => {
        e.preventDefault();
        // 1. Check empty fields
        if (!formData.email || !formData.password) {
            setError("Please fill all fields.");
            return;
        }
        // Email Validation
        if (!isValidEmail(formData.email)) {
            setError("Please enter a valid email.");
            return;
        }
        //2.context ka login function call
        const success = login(
            formData.email,
            formData.password
        );
        //3.login failed
        if (!success) {
            setError("Invalid email or password");
            return;
        }
        //4.login successful
        navigate("/dashboard");
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 px-4 py-10">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Welcome </h1>
                    <p className="mt-2 text-gray-500">Login to continue to Age Calculator</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 sm:p-8">
                    {error && (
                        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                        <div>
                            <div className="relative">
                                <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"> {showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                        </div>
                        <Button type="submit" text="Login" />
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-500">Don't have an account?{" "}
                        <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">Register</Link>
                    </p>
                </div>
            </div >
        </div >
    );
}
export default Login;