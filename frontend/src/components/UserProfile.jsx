import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../client";
import imageUrlBuilder from "@sanity/image-url";
//import profilePlaceHolder from "../assets/profile_place_holder.png";
import {
  userQuery,
} from "../utils/data";

const UserProfile = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const { userid } = useParams();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const User =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userid);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userid]);

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  return (
    <div className="">
      <div className="bg-gray-50 h-screen">
        <Link to="/">
          <b>
            <h1 className="text-4xl font-messiri text-center">
              Tuition Fee Management System
            </h1>
          </b>
        </Link>
        <button
          className="flex bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded-lg md:absolute md:top-1 md:z-1 md:right-2 mx-auto mb-1"
          onClick={logout}
          type="button"
          title="Wants to Logout?"
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
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
        <div className="px-8 flex flex-col justify-center items-center">
          <img
            className="object-cover h-72 w-full rounded-[15px]"
            src="https://source.unsplash.com/1600x900/?nature,photography,technology"
            alt="Cover Pic"
          />
          <img
            className="rounded-full w-40 h-40  -mt-10 shadow-xl object-cover"
            src={urlFor(User.image).url()}
            alt="userPic"
          />
        </div>
        <h1 className="font-bold text-3xl text-center mt-3 pb-2 font-messiri">
          {User.studentName}
        </h1>
        <div className="main grid place-items-center">
          <div className="card bg-white flex flex-col justify-center p-4 shadow-lg rounded-2xl md:w-1/3 font-messiri">
            <h2 className="flex justify-center text-2xl font-bold text-center pb-2">
              Student Info
              <button
                className="ml-1 md:hover:text-green-500"
                type="button"
                title="Provided by Student"
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </h2>
            <hr className="pb-5" />
            <table className="text-xl">
              <tr>
                <td>
                  <h2 className="flex font-bold">
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
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    User Id
                  </h2>
                </td>
                <td>
                  <h2>: {User.userid}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="flex font-bold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    Department
                  </h2>
                </td>
                <td>
                  <h2>: {User.department}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="flex font-bold">
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
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                    Session
                  </h2>
                </td>
                <td>
                  <h2>: {User.session}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="flex font-bold">
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
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                    Current Semester
                  </h2>
                </td>
                <td>
                  <h2>: {User.currentSemester}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="flex font-bold">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Phone
                  </h2>
                </td>
                <td>
                  <h2>: {User.phone}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="flex font-bold">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </h2>
                </td>
                <td>
                  <h2>: {User.email}</h2>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <footer className="mt-5 border">
          <div className="lg:fixed inset-x-0 bottom-0 text-center p-4 text-gray-700">
            © 2022 Copyright
          </div>
        </footer>
      </div>
    </div>
  );
};

export default UserProfile;
