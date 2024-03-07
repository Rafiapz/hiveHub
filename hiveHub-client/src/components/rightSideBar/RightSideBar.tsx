import React from 'react'
import Searchbox from '../search/Searchbox'

function RightSideBar() {
  return (
    <div className="bg-gray-200 h-full w-80 fixed top-0 right-0 flex flex-col justify-between shadow-lg">
    <div className="p-4">
        <Searchbox/>
    </div>
  </div>
  )
}

export default RightSideBar