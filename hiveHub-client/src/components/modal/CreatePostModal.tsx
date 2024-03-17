import React from "react";
import CreatePost from "../post/CreatePost";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function CreatePostModal({  onClose }: any) {

    const isOpen=useSelector((state:RootState)=>state.posts.createPostModal.isOpen)

    if(!isOpen){
        document.body.style.overflow = 'auto';
        return
    }else{
        document.body.style.overflow = 'hidden';
    }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-8 rounded-lg z-50 w-1/2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
        <CreatePost />
      </div>
    </div>
  );
}

export default CreatePostModal;
