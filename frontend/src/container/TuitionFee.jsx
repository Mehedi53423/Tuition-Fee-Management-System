import React from "react";
import { useNavigate } from "react-router-dom";

const TuitionFee = (props) => {
  const navigate = useNavigate();
  const { _id, monthName, tutionFeeType, fee } = props.fee;

  function tutionD(){
    sessionStorage.setItem("id", _id);
    sessionStorage.setItem("monthName", monthName);
    sessionStorage.setItem("tutionFeeType", tutionFeeType);
    sessionStorage.setItem("fee", fee);

    navigate("/TuitionDetail")
  }

  return (
    <div
      className="bg-white font-messiri text-center shadow-2xl rounded-2xl h-40 hover:bg-green-300 hover:text-lg hover:font-bold hover:animate-bounce"
      onClick={tutionD}
    >
      <h1 className="py-16 text-xl">{monthName}</h1>
    </div>
  );
};

export default TuitionFee;
