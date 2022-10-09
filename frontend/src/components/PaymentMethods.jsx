import { React } from "react";
import { Link, useNavigate } from "react-router-dom";

import Bkash from "../assets/bkash.png";
import Nogod from "../assets/nagad.png";
import Roket from "../assets/rocket.png";

const PaymentMethods = () => {
    
    const navigate = useNavigate();

    function handleClickBkash(){
      navigate("/Payment");
      sessionStorage.setItem("method", "Bkash");
    }

    function handleClickNogod() {
      navigate("/Payment");
      sessionStorage.setItem("method", "Nogod");
    }

    function handleClickRocket() {
      navigate("/Payment");
      sessionStorage.setItem("method", "Rocket");
    }

  return (
    <div className="bg-gray-50 h-screen">
      <header>
        <Link to="/">
          <b>
            <h1 className="text-4xl font-messiri text-center">
              Tuition Fee Management System
            </h1>
          </b>
        </Link>
      </header>
      <div>
        <h1
          className="text-3xl text-center font-messiri mt-24 font-bold"
          id="title"
        >
          Choose Your Method Of Payment
        </h1>
      </div>
      <main className="flex justify-center mt-10" id="paymentMethodSection">
        <div className="grid md:grid-cols-3 gap-8 p-8 lg:w-1/2">
          <div
            className="bg-white flex justify-center font-messiri shadow-2xl rounded-2xl h-40 p-5 hover:bg-green-300 hover:animate-bounce"
            id="Bkash"
            onClick={handleClickBkash}
          >
            <img src={Bkash} alt="Bkash" />
          </div>
          <div
            className="bg-white flex justify-center font-messiri shadow-2xl rounded-2xl h-40 p-5 hover:bg-green-300 hover:animate-bounce"
            id="Nogod"
            onClick={handleClickNogod}
          >
            <img src={Nogod} alt="Nogod" />
          </div>
          <div
            className="bg-white flex justify-center font-messiri shadow-2xl rounded-2xl h-40 p-5 hover:bg-green-300 hover:animate-bounce"
            id="Roket"
            onClick={handleClickRocket}
          >
            <img src={Roket} alt="Roket" />
          </div>
        </div>
      </main>
      <footer className="mt-5">
        <div className="md:fixed inset-x-0 bottom-0 font-messiri text-lg text-center p-4 text-gray-700">
          © 2022 Copyright
        </div>
      </footer>
    </div>
  );
};

export default PaymentMethods;
