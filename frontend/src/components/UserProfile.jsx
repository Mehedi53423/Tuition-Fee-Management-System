import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { client } from "../client";
import profilePlaceHolder from "../assets/profile_place_holder.svg";
import {
  userQuery,
} from "../utils/data";

const UserProfile = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const { userid } = useParams();

  console.log(userid);

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

  function updateProfile(username) {
    fetch("/getProfile?user=" + username)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          
        }
        fetch("/getPosts?user=" + username)
          .then((res) => res.json())
          .then((posts) => {
            setProfileData(data[0]);
            //setPosts(posts);
            //updateFollowing(data[0]);
            //setOwner(user === data[0].username);
          });
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="">
      <div className="bg-gray-50 h-screen transition-height duration-75 ease-out">
        <Link to="/">
          <b>
            <h1 className="text-4xl font-messiri text-center">
              Tuition Fee Management System
            </h1>
          </b>
        </Link>
        <button
          className="flex bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded-lg absolute top-1 z-1 right-2"
          onClick={logout}
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
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
        <div className="px-8">
          <img
            className="object-cover h-72 w-full rounded-[15px]"
            src="https://source.unsplash.com/1600x900/?nature,photography,technology"
            alt="Cover Pic"
          />
          <img
            className="rounded-full w-25 h-25 -mt-10 shadow-xl object-cover"
            src={
              profileData.photo
                ? profileData.photo.asset.url
                : profilePlaceHolder
            }
            alt="userPic"
          />
        </div>
      </div>
      <h1 className="">""</h1>
    </div>
  );
};

export default UserProfile;
