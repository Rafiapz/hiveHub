import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faShare, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchAllposts } from '../../store/actions/post/postActions';
import Loading from '../loading/Loading';

function Posts() {


  const [posts, setPosts] = useState<string[]>([])
  const dispatch = useDispatch<AppDispatch>()
  const loading = useSelector((state: RootState) => state.posts.posts.loading)
  const allPosts = useSelector((state: RootState) => state.posts.posts.data)

  const baseUrl='http://localhost:7700'
  useEffect(() => {

    dispatch(fetchAllposts()).then((data) => {
      setPosts(data.payload.data)
    })


  }, [])

  
  

  return (

    <>

      {loading ? <Loading />
        :
        <>
          {posts?.map((item:any) => {
            return (
              <div key={item?._id} className="bg-gray-50 w-1/2 p-4 shadow-lg mx-auto mt-2">
                <div className="flex items-center mb-4">
                  <img src='https://source.unsplash.com/150x150/?nature' alt="User" className="rounded-full h-8 w-8 mr-2" />
                  <p className="font-bold">{item?.userId?.fullName}</p>
                </div>

                <p>{item?.media}</p>
                
                {/* <img src={`${item?.media}`} alt="Posted" className="mb-4 rounded-lg w-full" /> */}
                <video controls src={`${item?.media}`}></video>
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
          })}


        </>
      }




    </>
  )
}

export default Posts