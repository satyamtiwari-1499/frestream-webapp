import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../Context/WrapperContext";
import { Link } from "react-router-dom";
import axios from "axios";

const TitleCard2 = (props) => {
  const [apiData, setApiData] = useState([]);
  const { title } = useContext(Context);
  const { index, category } = props;
  const cardboxRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardboxRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${
            category ? category : "now_playing"
          }?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_APP_AUTH_TOKEN}`,
            },
          }
        );
        setApiData(res.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    const refCurrent = cardboxRef.current;
    refCurrent.addEventListener("wheel", handleWheel);

    return () => {
      refCurrent.removeEventListener("wheel", handleWheel);
    };
  }, [category]);

  return (
    <div className="TitleCard2  min-h-screen w-screen p-4 bg-[#023A68] text-white text-4xl">
      <div className="Cardtitle  mb-4 select-none">
        <h1 className=" pl-2 uppercase font-black mt-12 mb-12 text-3xl ">{title[index] || "Frestream"}</h1>
      </div>

      <div
        ref={cardboxRef}
        className="flex flex-wrap gap-8"
        // className="Cardbox flex gap-6 overflow-x-auto  scrollbar-thin scrollbar-thumb-green-600 scrollbar-track-gray-800"
      >
        {apiData.map((elem, idx) => (
          <Link
            to={`/player/${elem.id}`}
            key={idx}
            className="card  relative flex-shrink-0 h-[290px] w-[240px] overflow-hidden rounded-l shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-[#FF0000]"
          >
            <img
              className="h-[550px] w-[300px] object-cover  rounded-t-lg"
              src={`https://image.tmdb.org/t/p/original${elem.backdrop_path}`}
              alt={elem.original_title}
            />
            <h1 className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent   text-2xl font-black text-center px-3 py-2 truncate">
              {elem.original_title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCard2;
