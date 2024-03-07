import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBell,
  faEnvelope,
  faBookmark,
  faUsers,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Menu() {
  return (
    <div className="bg-gray-200 h-full w-80 fixed top-0 left-0 flex flex-col justify-between shadow-lg">
      <div className="p-4">
        <a href="#" className="text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Home
        </a>
        <a href="#" className="text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faBell} className="mr-2" />
          Notifications
        </a>
        <a href="#" className="text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Messages
        </a>
        <a href="#" className="text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faBookmark} className="mr-2" />
          Bookmarks
        </a>
        <a href="#" className="text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faUsers} className="mr-2" />
          Groups
        </a>
        <a href="#" className=" text-gray-800 flex items-center mb-4">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          My Profile
        </a>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          New Post
        </button>
      </div>
    </div>
  );
}

export default Menu;
