import React from "react";
import hero from "../assets/hero_banner.jpg";
import playicon from "../assets/play_icon.png";
import infoicon from "../assets/info_icon.png";
import { FaDownload, FaInfo, FaPlay } from "react-icons/fa";

const TitleCard = () => {
  return (
    <div className="titlecard bg-white min-h-screen w-screen relative  ">
      <div className="heroimgContainer h-full w-full  ">
        <img
          className="heroimg h-screen w-full object-cover object-bottom  brightness-90"
          src="https://wallpapercat.com/w/full/6/e/8/1381542-3840x2160-desktop-4k-movie-poster-wallpaper-photo.jpg"
          alt=""
        />

        <div className="caption absolute bottom-20 left-4 md:left-12 max-w-3xl space-y-6">
          <h2 className="text-[white]  uppercase text-3xl md:text-5xl  font-black  ">
            Frestream Series
          </h2>
         
          <div className="flex justify-start mr-28 gap-4 mt-4">
            <button className=" bg-white text-black flex items-center gap-2 px-4 py-1 rounded-2xl transition">
              <FaPlay/>
              Play
            </button>
            <button className="bg-black/15 border  text-white  flex items-center gap-2 px-4 py-1 rounded-2xl transition">
              <FaInfo/>
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
