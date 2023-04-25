import React, { useState, useEffect } from "react";
const AuthContextold = React.createContext({
  isLoggedIn: false,
  authToken: "",
  onLogout: () => {},
  // onLogin: (username, password) => {}, // dummy email and password here.
  onLogin: (token, role) => {}, // dummy token and role
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState("");

  useEffect(() => {
    const storedLoginInformation = localStorage.getItem("isLoggedIn");
    const storedTokenInformation = localStorage.getItem("token");
    console.log("token", storedTokenInformation);
    if (storedLoginInformation === "1") {
      setIsLoggedIn(true);
      console.log("useEffect Run", storedLoginInformation);
    }
    if (storedTokenInformation) {
      setAuthToken(storedTokenInformation);
      console.log("useEffect Run", storedTokenInformation);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setAuthToken("");
  };
  const loginHandler = (token, role) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("isLoggedIn", 1);
    setAuthToken(token);
    setIsLoggedIn(true);
  };
  return (
    <AuthContextold.Provider
      value={{
        isLoggedIn: isLoggedIn,
        authToken: authToken,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContextold.Provider>
  );
};

export default AuthContextold;
