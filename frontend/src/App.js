import { React, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Home from "./container/Home";
import TuitionDetail from "./components/TuitionDetail";
import Success from "./components/Success";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="UserProfile" element={<UserProfile />} />
      <Route path="TuitionDetail" element={<TuitionDetail />} />
      <Route path="Success" element={<Success />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
