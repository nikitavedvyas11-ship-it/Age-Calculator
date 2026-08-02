import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
function Dashboard() {
    const { user } = useAuth();
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900">Welcome,{user?.name}</h2>
                    <p className="mt-3 text-gray-500">Ready to calculate your age?</p>
                    <Link to="/age-calculator">
                        <button className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700">Calculate Your Age</button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
export default Dashboard;