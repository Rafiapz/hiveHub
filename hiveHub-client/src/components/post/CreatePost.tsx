import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faFileAlt } from "@fortawesome/free-solid-svg-icons";

function CreatePost() {

  const [image,setImage]=useState<string|null>(null)

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result as string);
        }
      };
      
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="bg-gray-200 w-1/2 p-4 shadow-lg mx-auto">
      <label
        htmlFor="file-upload"
        className="cursor-pointer mb-4 flex items-center"
      >
        <FontAwesomeIcon icon={faImage} className="text-blue-500 mr-2" />
        Upload Photo
      </label>
      <input id="file-upload" type="file" accept="image/*" onChange={handleChange} className="hidden" />
       <div className="border border-gray-300 border-dashed p-4 text-center mb-4">         
       {image && <img src={image} alt="Uploaded" className="max-w-full h-auto" />}
       </div> 
      <textarea
        placeholder="Write something..."
        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
        rows={4}
      ></textarea>
      <div className="flex justify-end">
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mr-2">
          Cancel
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
