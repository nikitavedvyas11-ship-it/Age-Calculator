import { useState } from "react";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Button from "../components/Button";
import AgeResult from "../components/AgeResult";
import { calculateAge } from "../utils/calculateAge";
function AgeCalculator() {
    const [formData, setFormData] = useState({ day: "", month: "", year: "", });
    const [error, setError] = useState("");
    const [result, setResult] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value,
        });
        setError("");
        setResult(null);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //1.Empty field
        if (!formData.day || !formData.month || !formData.year) {
            setError("Please fill all fields.");
            return;
        }
        const day = Number(formData.day);
        const month = Number(formData.month);
        const year = Number(formData.year);
        //2.Month Validation
        if (month < 1 || month > 12) {
            setError("Month must be between 1 and 12.");
            return;
        }
        //3.Day Validation
        if (day < 1 || day > 31) {
            setError("Day must be between 1 and 31.");
            return;
        }
        //4.Check actual days in month
        const daysInMonth = new Date(year, month, 0).getDate();
        if (day > daysInMonth) {
            setError(`This month has only ${daysInMonth}days.`);
            return;
        }
        //5.Future date check
        const today = new Date();
        const birthDate = new Date(year, month - 1, day);
        if (birthDate > today) {
            setError("Date of birth cannot be in the future.");
            return;
        }
        // Calculate Age
        const age = calculateAge(birthDate);
        setResult(age);
    };
    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-2xl">
                {/* Heading */}
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600"> Age Calculator</p>
                    <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-900">How old are you?</h1>
                    <p className="mt-3 text-gray-500">Enter your date of birth to calculate your exact age.</p>
                </div>
                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
                    {error && (
                        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-600 text-sm">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        {/* Inputs */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Input label="Day"type="number"name="day" value={formData.day}onChange={handleChange}placeholder="DD" />
                            <Input label="Month"type="number"name="month"value={formData.month} onChange={handleChange} placeholder="MM"/>
                            <Input label="Year" type="number"name="year"value={formData.year} onChange={handleChange} placeholder="YYYY"/>
                        </div>
                        <div className="mt-6">
                            <Button type="submit"text="Calculate Age"/>
                        </div>
                    </form>
                    <AgeResult result={result} />
                </div>
            </div>
        </div>
    );
}
export default AgeCalculator;