import React from "react";
import Articles from "../components/Articels/Articles";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Hero from "../components/Hero/Hero";
import MyStory from "../components/MyStory/MyStory";

const Home = () => {
  return (
    <div>
      <Hero />
      <MyStory />
      <Articles />
      <GetInTouch />
    </div>
  );
};

export default Home;
