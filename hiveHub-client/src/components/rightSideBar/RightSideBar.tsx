import React from "react";
import Searchbox from "../search/Searchbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logoutReducer } from "../../store/slices/user/userSlice";
import { useNavigate } from "react-router-dom";

function RightSideBar() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logoutReducer())
    navigate('/')
  };
  return (
    <div className="bg-gray-50 h-full w-80 fixed top-0 right-0 flex flex-col justify-between shadow-lg">
    <div className="p-4">
      <Searchbox />
    </div>
    <div className="flex justify-end pr-4 pb-4">
      <button onClick={() => handleLogout()} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Logout
      </button>
    </div>
  </div>
  
  );
}

export default RightSideBar;
