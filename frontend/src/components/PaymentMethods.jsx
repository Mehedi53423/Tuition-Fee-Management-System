import { React } from "react";
import { Link } from "react-router-dom";

const PaymentMethods = () => {
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
      <main>
        <div className="grid md:grid-cols-3 gap-8 p-8">
          <div className="bg-white font-messiri text-center shadow-2xl rounded-2xl h-40">
            <img src="" alt="Bkash" />
          </div>
          <div className="bg-white font-messiri text-center shadow-2xl rounded-2xl h-40">
            <img src="" alt="Nogod" />
          </div>
          <div className="bg-white font-messiri text-center shadow-2xl rounded-2xl h-40">
            <img src="" alt="Roket" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentMethods;
