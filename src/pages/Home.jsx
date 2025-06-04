import React from "react";
import Navbar from "../component/Navbar";
import TitleCard from "./TitleCard";
import TitleCard2 from "./TitleCard2";
import Footer from "../component/Footer";
import Player from "../component/Player";


const Home = () => {
  return (
    <div className="overflow-hidden max-w-screen rounded-2xl relative">
      <Navbar /> 
      <TitleCard/>
      <TitleCard2 index ="0" category={"now_playing"} />
      <TitleCard2 index ="1" category={"top_rated"} />
      <TitleCard2 index ="2" category={"popular"}   />
      <TitleCard2 index ="4" category={"upcoming"} />
      <Footer/>
      
    </div>
  );
};

export default Home;
