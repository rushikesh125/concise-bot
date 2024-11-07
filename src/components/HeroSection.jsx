import React from "react";
import sample_video from "../images/sample_video.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="mt-10 p-2  md:flex">
      <div className="mt-5 lg:mt-20  md:w-1/2 m-1">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Learn Faster, Understand Better with AI-Powered Concise Bot
        </h1>
        <p className="text-gray-300">
          <span className="text-green-500">Say hello to Concise Bot</span> – the
          smart, streamlined solution for learning. With advanced summarization,
          personalized guidance, and NLP capabilities, Concise Bot helps you
          master content quickly and efficiently.
        </p>
        <Link to="/chatbot" className="bg-green-700 rounded-full py-2 px-4 md:mt-4 m-1 inline-block" style={{boxShadow:"0px 0px 5px #00ff62"}}>
          <i class="bi bi-play-fill"></i> Start Learning
        </Link>
        <button className="bg-white text-black rounded-full py-2 px-4 md:mt-4 m-1">
          Discover How It Works <i className="bi bi-shuffle"></i>
        </button>
      </div>
      <div className="mt-6 lg:mt-0  md:w-1/2 m-1">
        <img src={sample_video} alt="sample_video" />
      </div>
    </div>
  );
};

export default HeroSection;
