// Save all registered users
export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// Get all registered users
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

// Save current logged-in user
export const saveCurrentUser = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

// Get current logged-in user
export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("currentUser"));
};

// Remove current user (Logout)
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};