import React from 'react';

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
          props.isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >    
          <i className="bi bi-x-square-fill absolute top-4 right-4 cursor-pointer" onClick={props.toggleOffCanvas}></i>
        <div className="p-4">
          <h2 className="text-xl font-bold">Off-Canvas Menu</h2>
          <p className="mt-2">This is the content inside the off-canvas.</p>
        </div>
      </div>
    </div>
  );
}

export default OffCanvas;
