import React from "react";
import TitleCard2 from "./TitleCard2";

const Hero = () => {
  return (
    <div className="hero">
        
      <TitleCard2 index="0" category={"now_playing"} />
      <TitleCard2 index="1" category={"top_rated"} />
      <TitleCard2 index="2" category={"popular"} />
      <TitleCard2 index="4" category={"upcoming"} />
    </div>
  );
};

export default Hero;
