import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
//import UserProfile from "../components/UserProfile";
//import TuitionFee from "./TuitionFee"

const Home = () => {
  return (
    <div className="bg-gray-50 h-screen transition-height duration-75 ease-out">
      <div className="">
        <Link to="/">
          <b>
            <h1 className="text-4xl font-messiri text-center">
              Tuition Fee Management System
            </h1>
          </b>
        </Link>
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
