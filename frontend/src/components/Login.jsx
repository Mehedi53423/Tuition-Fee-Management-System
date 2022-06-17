import { React, useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userid, setUserId] = useState("");
  const [userpass, setUserPass] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    fetch("/getProfile?user=" + userid)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0 && data[0].password === userpass) {
          localStorage.setItem("user", JSON.stringify(data[0]));
          
          //console.log(localStorage.getItem("user"));
          navigate("/");
        } else {
          console.log("Error");
        }
      });
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="relative w-full h-full">
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
          <div className="p-12">
            <b>
              <h1 className="text-6xl text-white font-messiri">
                Tuition Fee Management System
              </h1>
            </b>
          </div>
          <div className="">
            <form className="flex flex-1 flex-col gap-6" action="" method="">
              <label className="relative text-gray-400 focus-within:text-gray-600 block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>

                <input
                  type="text"
                  id="userid"
                  placeholder="User Id"
                  className="outline-none font-messiri bg-white text-2xl sm:text-3xl font-bold border-b-2 p-2 rounded-lg block form-input appearance-none pl-14 text-gray-500"
                  onInput={(e) => {
                    setUserId(e.target.value);
                  }}
                  required
                />
              </label>

              <label className="relative text-gray-400 focus-within:text-gray-600 block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>

                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="outline-none font-messiri bg-white text-2xl sm:text-3xl font-bold border-b-2 p-2 rounded-lg block form-input appearance-none pl-14 text-gray-500"
                  onInput={(e) => {
                    setUserPass(e.target.value);
                  }}
                  required
                />
              </label>

              <button
                type="button"
                className="flex justify-center text-white bg-cyan-500 hover:bg-cyan-600 font-messiri focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800"
                onClick={handleLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
