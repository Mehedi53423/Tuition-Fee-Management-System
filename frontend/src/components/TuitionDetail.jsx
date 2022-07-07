import React from "react";
import { Link } from "react-router-dom";

const TuitionDetail = () => {

  return (
    <div className="bg-gray-50 h-screen">
      <div>
        <Link to="/">
          <b>
            <h1 className="text-4xl font-messiri text-center">
              Tuition Fee Management System
            </h1>
          </b>
        </Link>
      </div>
      <div className="main grid place-items-center mt-20">
        <div className="card bg-white flex flex-col justify-center p-4 shadow-lg rounded-2xl md:w-1/3 font-messiri">
          <h2 className="text-2xl font-bold text-center pb-2">
            Session 2022
          </h2>
          <hr />
          <table className="text-xl">
            <tr>
              <td className="">
                <h2 className="font-bold">Semester No.</h2>
              </td>
              <td>
                <h2 className="">: 5th</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="font-bold">Tuition Fee</h2>
              </td>
              <td>
                <h2>: 5000 &#2547;</h2>
              </td>
            </tr>
            <tr className="border-b">
              <td>
                <h2 className="font-bold">Semester Fee</h2>
              </td>
              <td>
                <h2>: 5000 &#2547;</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="font-bold">Total</h2>
              </td>
              <td>
                <h2>: 10000 &#2547;</h2>
              </td>
            </tr>
          </table>
          <hr className="pb-2" />
          <button
            className="flex justify-center bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded-lg"
            type="button"
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
            Pay Fee
          </button>
        </div>
      </div>
    </div>
  );
};

export default TuitionDetail;
