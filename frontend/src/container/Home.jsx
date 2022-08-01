import React, { useEffect, useState } from "react";
//import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
//import TuitionFee from "./TuitionFee";
//import Sidebar from "../components/Sidebar";

import {
  userCreatedPinsQuery,
  userQuery,
  userSavedPinsQuery,
} from "../utils/data";

const activeGreenBtnStyles =
  "transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 duration-300 bg-green-500 hover:bg-green-600 mt-2 text-white font-bold p-3 rounded-full w-1/3 outline-none font-messiri";

const activeRedBtnStyles =
  "transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 duration-300 bg-red-500 hover:bg-red-600 mt-2 text-white font-bold p-3 rounded-full w-1/3 outline-none font-messiri";
  
const notActiveBtnStyles =
  "transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110 duration-300 bg-primary mr-6 ml-6 mt-2 text-black font-bold p-3 rounded-full w-25 outline-none font-messiri";

const Home = () => {
  const [tutionFees, setTutionFees] = useState();
  const [text, setText] = useState("Not Paid");
  const [activeBtn, setActiveBtn] = useState("Not Paid");
  const [tutionFeesNo, setTutionFeesNo] = useState();
  //const navigate = useNavigate();

  const User =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  
  const userid = User.userid;

  if(User){
    fetch("/getFees?user=" + userid)
    .then((res) => res.json())
    .then((fees) => {
      setTutionFees(fees[0].sessionName);
      setTutionFeesNo(fees.length);
    })
  }
  else{
    console.log("Error");
  }

  // const products = ["orange", "apple", "watermelon"];

  // const list = products.map((product) => <li key={product}>{product}</li>);

  /*useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);*/

  /*useEffect(() => {
    if (text === "Created") {
      const createdPinsQuery = userCreatedPinsQuery(userid);

      client.fetch(createdPinsQuery).then((data) => {
        setPins(data);
      });
    } else {
      const savedPinsQuery = userSavedPinsQuery(userId);

      client.fetch(savedPinsQuery).then((data) => {
        setPins(data);
      });
    }
  }, [text, userId]);*/

  return (
    <div className="bg-gray-50 h-screen">
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
      <div>
        <b className="">
          <h1 className="text-2xl font-messiri text-center">Tuition Fees</h1>
        </b>
        <div className="text-center mb-7">
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn("Not Paid");
            }}
            className={`${
              activeBtn === "Not Paid" ? activeRedBtnStyles : notActiveBtnStyles
            }`}
          >
            &#2547; Not Paid
          </button>
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn("Paid");
            }}
            className={`${
              activeBtn === "Paid" ? activeGreenBtnStyles : notActiveBtnStyles
            }`}
          >
            &#2547; Paid
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 p-4">
          {/* {list} */}

          {/* {tutionFee.map((tf, index) => (
            <h1>{console.log(tf.sessionName)}</h1>
          ))} */}

          <Link to="/TuitionDetail">
            <div className="bg-white font-messiri text-center shadow-2xl rounded-2xl h-40 hover:bg-green-300 hover:text-lg hover:font-bold hover:animate-bounce">
              <h1 className="py-16">{tutionFees}</h1>
            </div>
          </Link>
        </div>
      </div>
      <footer className="mt-5">
        <div className="md:fixed inset-x-0 bottom-0 text-center p-4 text-gray-700">
          © 2022 Copyright
        </div>
      </footer>
    </div>
  );
};

export default Home;
