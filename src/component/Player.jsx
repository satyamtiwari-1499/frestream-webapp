import React, { useEffect, useState } from "react";
import back from "../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Player = () => {

  const navigate = useNavigate();

  const [apiData, setapiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTc3YjEwZmU1NTY5ODU2ZWE4NmQxMmY0MjdlOTFhYyIsIm5iZiI6MTc0NzQ2OTI2MC45ODcsInN1YiI6IjY4Mjg0M2NjZTE5Y2FiNTYxMjBiY2Q3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.idlb6Zjankg1jOO0OsiL5TLaPo5JLaKgvIV4RnaMhFA",
    },
  };

  useEffect(() => {
    const fetchData =async()=>{
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options)
    
      setapiData(response.data.results[0])
    }catch(err){
      console.log(err);
    }
 
  }
   fetchData()
  }, [id]);

  

  return (
    <div className="player bg-black mt-20 flex flex-col h-screen items-center justify-center px-4">
      <img
        onClick={() => {
          navigate(-1);
        }}
        className="h-10 absolute top-28 left-4"
        src={back}
        alt=""
      />
      <div className=" md:h-[500px] mt-9 w-full max-w-5xl aspect-video mb-4">
        <iframe
          className="w-full h-full border-4 border-white rounded-2xl"
          src={`https://youtube.com/embed/${apiData.key}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full max-w-5xl text-sm sm:text-base text-black font-medium flex flex-col sm:flex-row items-center justify-between bg-gray-100 rounded-2xl px-4 py-2 gap-2">
        <h2>{apiData.published_at.slice(0, 10)}</h2>
        <h2>{apiData.name}</h2>
        <h2>{apiData.typeof}</h2>
      </div>
    </div>
  );
};

export default Player;
