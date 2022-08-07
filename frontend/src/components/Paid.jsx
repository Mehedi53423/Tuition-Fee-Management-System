import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const activeGreenBtnStyles =
  "transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-110 duration-300 bg-green-500 hover:bg-green-600 mt-2 text-white font-bold p-3 rounded-full w-1/3 outline-none font-messiri";

const notActiveBtnStyles =
  "transition ease-in-out delay-250  hover:-translate-y-1 hover:scale-110 duration-300 bg-primary mr-6 ml-6 mt-2 text-black font-bold p-3 rounded-full w-25 outline-none font-messiri";

const Paid = () => {
  const [tutionFees, setTutionFees] = useState();
  const [text, setText] = useState("Paid");
  const [activeBtn, setActiveBtn] = useState("Paid");
  //const [tutionFeesNo, setTutionFeesNo] = useState();
  const [isPayed, setIsPayed] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const User =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  const userid = User.userid;

  if (User) {
    fetch("/getFees?user=" + userid)
      .then((res) => res.json())
      .then((fees) => {
        setTutionFees(fees[0].sessionName);
        setIsPayed(fees[0].payed);
      });
  } else {
    console.log("Error");
  }

  setTimeout(function () {
    setIsLoading(false);
  }, 5000);

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
              navigate("/");
            }}
            className={notActiveBtnStyles}
          >
            &#2547; Not Paid
          </button>
          <button
            type="button"
            onClick={(e) => {
              setText(e.target.textContent);
              setActiveBtn("Paid");
              navigate("/Paid");
            }}
            className={`${
              activeBtn === "Paid" ? activeGreenBtnStyles : notActiveBtnStyles
            }`}
          >
            &#2547; Paid
          </button>
        </div>

        {isLoading ? (
          <div class="text-center font-messiri text-2xl mt-80">
            <svg
              className="spinner-border m-2 animate-spin inline-block w-5 h-5 ml-4 border-4 border-x-green-500 border-b-green-500 hover:border-t-green-500 hover:border-x-white hover:border-b-white rounded-full"
              viewBox="0 0 24 24"
              role="status"
            ></svg>
            Loadingh...
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4 p-4">
            {isPayed ? (
              <Link to="/TuitionDetail">
                <div className="bg-white font-messiri text-center shadow-2xl rounded-2xl h-40 hover:bg-green-300 hover:text-lg hover:font-bold hover:animate-bounce">
                  <h1 className="py-16">{tutionFees}</h1>
                </div>
              </Link>
            ) : (
              <></>
            )}
          </div>
        )}
      </div>
      <footer className="mt-5">
        <div className="md:fixed inset-x-0 bottom-0 text-center p-4 text-gray-700">
          © 2022 Copyright
        </div>
      </footer>
    </div>
  );
};

export default Paid;
