import { React, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Home from "./container/Home";
import TuitionDetail from "./components/TuitionDetail";
import PaymentMethods from "./components/PaymentMethods";
import Payment from "./components/Payment";
import Success from "./components/Success";
import Paid from "./components/Paid";

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
      <Route path="Paid" element={<Paid />} />
      <Route path="PaymentMethods" element={<PaymentMethods />} />
      <Route path="Payment" element={<Payment />} />
      <Route path="Success" element={<Success />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
