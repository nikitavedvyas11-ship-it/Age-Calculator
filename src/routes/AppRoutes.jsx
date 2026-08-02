// URL ko component/pages se conect krna
import {Routes,Route,Navigate} from "react-router-dom";
import Register from "../pages/Register";//.. ek folder piche
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AgeCalculator from"../pages/AgeCalculator";
import ProtectedRoute from "../components/ProtectedRoute";
function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/Login"/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login"element={<Login />}/>
            <Route path="/dashboard"element={<ProtectedRoute> <Dashboard />  </ProtectedRoute>} />
            <Route path="/age-calculator"element={<ProtectedRoute> <AgeCalculator/> </ProtectedRoute>}/>
        </Routes>
    );
}
export default AppRoutes;