import React,{useState} from "react";
import OffCanvas from "./OffCanvas";
import bot_img from "./../images/concisebot.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffCanvas = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>  
      <div className="py-2 px-6 z-30 flex justify-between border-b border-slate-50/[0.10] align-middle backdrop-filter backdrop-blur-lg bg-opacity-30">
        <div className=" p-2">
          <img src={bot_img} alt="img_bot" className="w-6"/>
        </div>
        <div className="sm:block lg:hidden p-2 cursor-pointer" onClick={toggleOffCanvas}><i className="bi bi-list text-xl"></i></div>
       
        <div className="hidden lg:flex">
          <div className="p-2 cursor-pointer hover:text-green-400">Home</div>
          <div className="p-2 cursor-pointer hover:text-green-400">Features</div>
          <div className="p-2 cursor-pointer hover:text-green-400">Purpose</div>
          <div className="p-2 cursor-pointer hover:text-green-400">Blog</div>
          <div className="p-2 cursor-pointer hover:text-green-400">
            <i className="bi bi-github"></i>
          </div>
        </div>
      </div>
      <OffCanvas toggleOffCanvas={toggleOffCanvas} isOpen={isOpen}/>
    </>
  );
};

export default Navbar;
