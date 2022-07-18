import { React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png"

const Login = () => {
  const [userid, setUserId] = useState("");
  const [userpass, setUserPass] = useState("");
  const [realUser, setRealUser] = useState(true);
  const [logging, setLogging] = useState(false);

  const navigate = useNavigate();

  function close() {
    setRealUser(true);
  }

  function handleLogin(e) {
    fetch("/getProfile?user=" + userid)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0 && data[0].password === userpass) {
          localStorage.setItem("user", JSON.stringify(data[0]));
          setLogging(true);
          setTimeout(function () {
            navigate("/");
          }, 3000);
        } else {
          setRealUser(false);
        }
      });
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="relative w-full h-full">
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0">
          <img src={Logo} alt="Logo" />
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
                {logging ? (
                  <>
                    Logging In...
                    <svg
                      className="spinner-border animate-spin inline-block w-7 h-7 ml-4 border-4 border-x-white border-b-white border-t-cyan-500 rounded-full"
                      viewBox="0 0 24 24"
                      role="status"
                    ></svg>
                  </>
                ) : (
                  <>Login</>
                )}
              </button>
            </form>
            {realUser ? (
              <></>
            ) : (
              <div className="flex justify-start items-center flex-col">
                <div
                  className="flex items-center mt-4 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-full shadow dark:text-gray-400 dark:bg-gray-800"
                  role="alert"
                >
                  <div class="ml-3 text-lg font-messiri font-normal text-red-500">
                    User Id or Password is Wrong
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
