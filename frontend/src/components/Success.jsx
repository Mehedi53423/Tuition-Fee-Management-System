import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { runFireworks } from "../utils/confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Success = () => {
  const User =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  const paymentNumber = sessionStorage.getItem("payment");
  const method = sessionStorage.getItem("method");
  const monthName = sessionStorage.getItem("monthName");
  const tutionFeeType = sessionStorage.getItem("tutionFeeType");
  const fee = sessionStorage.getItem("fee");

  const notify = () => toast.success("Your Payment Was Successful");

  const navigate = useNavigate();

  useEffect(() => {
    runFireworks();
    notify();
  })

  function homePage(){
    navigate("/");
  }

  function print() {
    window.print();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-5 md:w-1/3 p-4 shadow-2xl rounded-2xl">
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="green"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
        <div className="text-4xl text-center font-messiri p-4">
          Your Payment Was Successful
        </div>
        <h2 className="text-3xl font-bold text-center font-messiri">
          {tutionFeeType}
        </h2>
        <div className="flex justify-center items-center font-messiri mt-6 mb-10">
          <table className="text-2xl w-4/5">
            <tr>
              <td className="">
                <h2 className="font-bold">Name</h2>
              </td>
              <td>
                <h2 className="">: {User.studentName}</h2>
              </td>
            </tr>
            <tr>
              <td className="">
                <h2 className="font-bold">Id</h2>
              </td>
              <td>
                <h2 className="">: {User.userid}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="font-bold">Department</h2>
              </td>
              <td>
                <h2>: {User.department}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="font-bold">Month Name</h2>
              </td>
              <td>
                <h2>: {monthName}</h2>
              </td>
            </tr>
            <tr className="">
              <td>
                <h2 className="font-bold">Fee</h2>
              </td>
              <td>
                <h2>: {fee} &#2547;</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="font-bold">Payment Method</h2>
              </td>
              <td>
                <h2>: {method}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="font-bold">Payment Number</h2>
              </td>
              <td>
                <h2>: {paymentNumber}</h2>
              </td>
            </tr>
          </table>
        </div>
        <div className="flex justify-center items-center mb-10">
          <button
            type="button"
            className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
            onClick={homePage}
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <h1 className="font-messiri text-lg">Home</h1>
          </button>
          <button
            type="button"
            className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2"
            onClick={print}
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
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            <h1 className="font-messiri text-lg">Print</h1>
          </button>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Success;