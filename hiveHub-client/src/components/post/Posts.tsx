import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';

function Posts() {
  return (

    <div className="bg-gray-50 w-1/2 p-4 shadow-lg mx-auto mt-2">
    <div className="flex items-center mb-4">
      <img src='https://source.unsplash.com/150x150/?nature' alt="User" className="rounded-full h-8 w-8 mr-2" />
      <p className="font-bold">Rafi apz</p>
    </div>
    <img src='https://source.unsplash.com/150x150/?nature' alt="Posted" className="mb-4 rounded-lg w-full" />
    <div className="flex justify-between">
    <div>
          <FontAwesomeIcon icon={faHeart} className="mr-4 text-red-600 size-7 cursor-pointer text-xl hover:text-red-600 transition duration-300" />
          <FontAwesomeIcon icon={faComment} className="mr-4 text-blue-500 size-7 cursor-pointer text-xl hover:text-blue-600 transition duration-300" />
          <FontAwesomeIcon icon={faShare} className="mr-4 text-yellow-300 size-7 cursor-pointer text-xl hover:text-green-600 transition duration-300" />
        </div>

      <div>
        <FontAwesomeIcon icon={faBookmark} className="text-gray-500 size-7 cursor-pointer" />
      </div>
    </div>
  </div>
  )
}

export default Posts