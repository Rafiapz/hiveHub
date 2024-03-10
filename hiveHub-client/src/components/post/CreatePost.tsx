import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { handleCreatePostModal } from "../../store/slices/user/userSlice";
import { AppDispatch } from "../../store/store";
import { createPostAction } from "../../store/actions/post/postActions";

function CreatePost() {

  const [image,setImage]=useState<File|null>(null)
  const [content,setContent]=useState<string>('')
  const dispatch=useDispatch<AppDispatch>()


  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    
     const file=e.target.files?.[0]

     if(file){
      setImage(file)
     }
  }

  const handleContentChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    
    setContent(e.target.value)
  }

  const handleSubmit=()=>{
   
    try {

      const formData=new FormData()

      if(image){
        formData.append('image',image)
      }

      formData.append('content',content)

      dispatch(createPostAction(formData))
      
    } catch (error) {

      console.log(error);
      
      
    }
    
  }

  return (
    <div className="bg-gray-200 w-full  mt-2 p-4 shadow-lg mx-auto">
      <label
        htmlFor="file-upload"
        className="cursor-pointer mb-4 flex items-center"
      >
        <FontAwesomeIcon icon={faImage} className="text-blue-500 mr-2" />
        Upload Photo
      </label>
      <input id="file-upload" type="file" accept="image/*" onChange={handleChange} className="hidden" />
       <div className="border border-gray-300 border-dashed p-4 text-center mb-4">         
       {/* {image && <img src={image} alt="Uploaded" className="max-w-full h-auto" />} */}
       </div> 
      <textarea value={content}
        onChange={handleContentChange}
        placeholder="Write something..."
        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
        rows={4}
      ></textarea>
      <div className="flex justify-end">
        <button onClick={()=>dispatch(handleCreatePostModal())} className="bg-white text-black font-bold py-2 px-4 rounded mr-2">
          Cancel
        </button>
        <button onClick={handleSubmit} className="bg-orange-400 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
