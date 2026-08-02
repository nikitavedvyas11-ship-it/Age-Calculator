import { createContext, useContext, useState } from "react";
// import { useParams } from "react-router-dom";
const AuthContext = createContext();
export function AuthProvider({ children }) {
    //current logged-in user
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("currentUser");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    //Login function
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const foundUser = users.find(
            (user) => user.email === email && user.password === password
        );
        if (!foundUser) {
            return false;
        }
        const currentUser = {
            name: foundUser.name, email: foundUser.email,
        };
        //Context state update
        setUser(currentUser);
        //Session persist
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        return true;
    };
    //Logout fuction
    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
    };
    // Values shared through Context
    const value={
        user,
        login,
        logout,
        isAuthenticated: Boolean(user),
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
);
}
//custom hook
export function useAuth() {
    return useContext(AuthContext);
}