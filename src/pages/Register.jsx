import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, saveUsers } from "../utils/storage";
import { isValidEmail, isValidPassword } from "../utils/validators";
import Input from "../components/Input";
import Button from "../components/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
function Register() {
    const navigate = useNavigate();
    //state object
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        console.log(formData);
        //1.Empty field check
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("Please fill all fields.");
            return;
        }
        //validate email 
        if (!isValidEmail(formData.email)) {
            setError("Please enter a valid email address.");
            return;
        }
        //validate password
        if (!isValidPassword(formData.password)) {
            setError("Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character.");
            return;
        }
        //2.Password match check
        if (formData.password !== formData.confirmPassword) {
            setError("Password do not match.");
            return;
        }
        //3.Get existing users
        const users = getUsers();
        //4.Check duplicate email
        const emailExists = users.some(
            (user) => user.email === formData.email
        );
        if (emailExists) {
            setError("Email already exists.");
            return;
        }
        //5.Create new user
        const newUser = { name: formData.name, email: formData.email, password: formData.password, };
        //6.Add user to users array
        users.push(newUser)
        //7.Save users in local storage
        saveUsers(users);
        //8.Go to login
        navigate("/login");
    };
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900">Register</h1>
                    <p className="mt-2 text-gray-500">Register to start using Age calculator</p>
                </div>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 sm:p-8">
                    {error && (
                        <div className="mb-5 rounded-lg bg-red-500 border border-red-200 px-4 py-3 text-sm text-red-50">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <Input label="Name"type="text"name="name"value={formData.name}onChange={handleChange}placeholder="Enter your name"/>
                        <Input label="Email"type="email"name="email"value={formData.email}onChange={handleChange}placeholder="Enter your email"/>
                         {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange}placeholder="Create password"className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"/>
                                <button type="button"onClick={() => setShowPassword(!showPassword)}className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                            </div>
                        </div>
                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                            <div className="relative">
                                <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword"value={formData.confirmPassword}onChange={handleChange}placeholder="Confirm password"className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"/>
                                <button type="button"onClick={() =>setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                {showConfirmPassword ? (<FaEyeSlash /> ) : (<FaEye />)}</button>

                            </div>
                        </div>  
                        <Button type="submit" text="Register" />
                    </form>
                    <div className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{""}
                        <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;
