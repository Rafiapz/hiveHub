import React from "react";
import Menu from "../../../components/menu/Menu";
import Story from "../../../components/story/Story";
import RightSideBar from "../../../components/rightSideBar/RightSideBar";
import CreatePost from "../../../components/post/CreatePost";
import Posts from "../../../components/post/Posts";
import CreatePostModal from "../../../components/modal/CreatePostModal";

function Home() {
  return (
    <div className="bg-gray-100">
      <Menu />
      <Story />
      <Posts/>
      <CreatePostModal/>
      <RightSideBar/>
    </div>
  );
}

export default Home;
