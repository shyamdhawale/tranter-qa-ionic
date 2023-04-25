import axios from "axios";
import { createContext, useState } from "react";
import jwt_decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // console.log(historya);

  const [user, setUser] = useState(() => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      return jwt_decode(tokens.access_token);
    }
    return null;
  });

  const login = async (payload) => {
    const apiResponse = await axios.post(
      "http://localhost:3001/api/login",
      payload
    );
    localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
    setUser(jwt_decode(apiResponse.data.access_token));
    return true;
    // historya.push("/")
  };
  const logout = async () => {
    // invoke the logout API call, for our NestJS API no logout API

    localStorage.removeItem("tokens");
    setUser(null);
    // console.log(historya);
    // history.push("/auth/login");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
