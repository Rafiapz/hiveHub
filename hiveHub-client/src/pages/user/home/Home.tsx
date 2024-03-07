import React from "react";
import Menu from "../../../components/menu/Menu";
import Story from "../../../components/story/Story";
import RightSideBar from "../../../components/rightSideBar/RightSideBar";
import CreatePost from "../../../components/post/CreatePost";

function Home() {
  return (
    <div>
      <Menu />
      <Story />
      <CreatePost/>
      <RightSideBar/>
    </div>
  );
}

export default Home;
