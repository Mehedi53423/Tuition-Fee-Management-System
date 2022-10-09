import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { client } from "../client";

const Payment = () => {
  const [paied, setPaied] = useState(false);
  const [number, setNumber] = useState();
  const [pin, setPin] = useState();
  const [correct, setCorrect] = useState(true);

  const navigate = useNavigate();
  const method = sessionStorage.getItem("method");
  const id = sessionStorage.getItem("id");
  
  function close() {
    setCorrect(true);
  }

  function handalePayment() {
    if(number.length === 11 && pin.length === 5){
        setPaied(true);
        sessionStorage.setItem("payment", number);
        client.patch(id).set({ payed: true }).commit();
        setTimeout(function () {
          navigate("/Success");
        }, 5000);
    }
    else{
        setCorrect(false);
    }
  }
  return (
    <div>
      <header>
        <Link to="/">
          <b>
            <h1 className="text-4xl font-messiri text-center">
              Tuition Fee Management System
            </h1>
          </b>
        </Link>
      </header>
      <main>
        <div className="pb-10">
          <h1
            className="text-3xl text-center font-messiri mt-24 font-bold"
            id="title"
          >
            Complete Your Payment
          </h1>
        </div>
        <div className="text-center text-xl mt-5 p-5 shadow-2xl rounded-2xl lg:w-1/2 mx-auto bg-white">
          <div
            className="text-center font-bold font-messiri text-2xl"
            id="paymentType"
          >
            Enter Your {method} Number
          </div>
          <input
            type="number"
            className="my-5 border w-1/2 font-messiri text-xl text-center rounded-2xl px-2 py-1"
            placeholder="Enter Your Number"
            onInput={(e) => {
              setNumber(e.target.value);
            }}
            required
          />
          <br />
          <input
            type="password"
            className="my-5 border w-1/2 font-messiri text-xl text-center rounded-2xl px-2 py-1"
            placeholder="Enter The PIN Code"
            onInput={(e) => {
              setPin(e.target.value);
            }}
            required
          />
          <br />
          <button
            type="button"
            className="flex justify-center border py-1 px-5 font-messiri rounded-3xl w-1/5 text-center mx-auto hover:bg-green-500 text-green-700 border-green-500 font-semibold hover:text-white"
            onClick={handalePayment}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {paied ? (
              <>
                Paying...
                <svg
                  className="spinner-border animate-spin inline-block w-5 h-5 ml-4 border-4 border-x-green-500 border-b-green-500 hover:border-t-green-500 hover:border-x-white hover:border-b-white rounded-full"
                  viewBox="0 0 24 24"
                  role="status"
                ></svg>
              </>
            ) : (
              "Pay Fee"
            )}
          </button>
        </div>
      </main>
      {correct ? (
        <></>
      ) : (
        <div className="flex justify-start items-center flex-col mt-10">
          <div
            className="flex items-center mt-4 max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-full dark:text-gray-400 dark:bg-gray-800 shadow-2xl"
            role="alert"
          >
            <div class="ml-3 text-lg text-center font-messiri font-normal text-red-500">
              Please Enter The Correct Number And PIN
            </div>
            <button
              type="button"
              class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
              onClick={close}
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}
      <footer className="mt-5">
        <div className="md:fixed inset-x-0 bottom-0 font-messiri text-lg text-center p-4 text-gray-700">
          © 2022 Copyright
        </div>
      </footer>
    </div>
  );
};

export default Payment;
