import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const TuitionDetail = () => {
  const [paied, setPaied] = useState(false);
  const [tFee, setTFee] = useState({});

  const User =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  const userid = User.userid;
  const id = sessionStorage.getItem("id");

  const navigate = useNavigate();

  if(User){
    fetch("/getFees?user=" + userid)
      .then((res) => res.json())
      .then((fees) => {
        for(let i=0;i<fees.length;i++){
          if(fees[i]._id === id){
            setTFee(fees[i]);
          }else{
            console.log("Error");
          }
        }
      });
  }else{
    console.log("Error");
  }

  function handlePayment() {
    setPaied(true);
    setTimeout(function () {
      navigate("/PaymentMethods");
    }, 5000);
  }

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
      <div className="grid place-items-center mt-20 md:h-2/3 sm:p-2 md:p-0 lg:p-0">
        <div className="card bg-white flex flex-col justify-center p-10 md:p-15 lg:p-20 shadow-2xl rounded-2xl sm:w-2/3 md:w-2/3 lg:w-1/3 h-full font-messiri">
          <h2 className="text-3xl font-bold text-center pb-6">
            {tFee.tutionFeeType}
          </h2>
          <hr />
          <table className="sm:text-xl md:text-2xl lg:text-2xl p-8">
            <tr className="">
              <td className="">
                <h2 className="font-bold">Month Name</h2>
              </td>
              <td>
                <h2 className="">: {tFee.monthName}</h2>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="font-bold">Monthly Fee</h2>
              </td>
              <td>
                <h2>: {tFee.fee} &#2547;</h2>
              </td>
            </tr>
          </table>
          <hr className="pb-2" />
          {tFee.payed ? (
            <></>
          ) : (
            <button
              className="flex justify-center hover:bg-green-500 text-green-700 font-semibold hover:text-white mt-6 py-2 px-2 border border-green-500 rounded-lg"
              type="button"
              onClick={handlePayment}
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
                  Processing...
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
          )}
        </div>
      </div>
      <footer className="mt-5">
        <div className="md:fixed inset-x-0 bottom-0 font-messiri text-lg text-center p-4 text-gray-700">
          © 2022 Copyright
        </div>
      </footer>
    </div>
  );
};

export default TuitionDetail;
