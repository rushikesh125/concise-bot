import React from "react";
import { Link } from "react-router-dom";

function OffCanvas(props) {
  return (
    <div className="relative z-50">
      {/* <button
        onClick={props.toggleOffCanvas}
        className="px-4 py-2 bg-slate-400 text-white rounded"
      >
        Toggle Off-Canvas
      </button> */}

      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-slate-900 transform transition-transform ${
          props.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <i
          className="bi bi-x-square-fill absolute top-4 right-4 cursor-pointer"
          onClick={props.toggleOffCanvas}
        ></i>
        <div className="p-4">
          <h2 className="text-xl font-bold">Menu</h2>
          <div className=" flex flex-col my-4">
            <Link to={`/`} className="p-2 cursor-pointer hover:text-green-400"  onClick={props.toggleOffCanvas}>
              Home
            </Link>
            <Link
              to={`/chatbot`}
              className="p-2 cursor-pointer hover:text-green-400"
              onClick={props.toggleOffCanvas}
            >
              Chatbot
            </Link>
            <div className="p-2 cursor-pointer hover:text-green-400">
              Purpose
            </div>
            <div className="p-2 cursor-pointer hover:text-green-400">Blog</div>
            <div className="p-2 cursor-pointer hover:text-green-400">
              <i className="bi bi-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
