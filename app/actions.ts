export const handleLogin = (username: string, password: string): boolean => {
  const isAuthenticated = username === "user" && password === "password";

  if (isAuthenticated) {
    localStorage.setItem("authenticated", "true");
  }

  return isAuthenticated;
};

export const handleLogout = () => {
  localStorage.removeItem("authenticated");
};
