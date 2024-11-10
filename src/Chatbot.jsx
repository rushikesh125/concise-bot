// import React, { useState, useRef, useEffect } from "react";
// import botimg from "./images/concisebot.png";
// import AiResponse from "./components/AiResponse";
// import Navbar from "./components/Navbar";
// import { useUploadWindow } from "./useUploadWindow";
// import PdfUpload from "./components/PdfUpload";
// const Chatbot = () => {
//   const [prompt, setPrompt] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);
//   const [chat, setChat] = useState([]);
//   const textareaRef = useRef(null);
//   const chatContainerRef = useRef(null);
//   const { pdfWindow, updatePdfWindow } = useUploadWindow();

//   useEffect(() => {
//     console.log("Chatbot pdfWindow:", pdfWindow);
//   }, [pdfWindow]);

//   async function generateResponse(text) {
//     try {
//       setIsGenerating(true);
//       const response = await fetch(process.env.REACT_APP_BOT_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt: text }),
//       });
//       const data = await response.json();
//       console.log(data);
//       setChat((prevData) => [...prevData, data]);
//       setIsGenerating(false);
//     } catch (err) {
//       alert(err);
//       setIsGenerating(true);
//     }
//   }

//   useEffect(() => {
//     console.log("use effect called");
//     generateResponse("Hello");
//     const textarea = textareaRef.current;
//     if (textarea) {
//       const adjustHeight = () => {
//         textarea.style.height = "auto"; // Reset the height
//         if (textarea.scrollHeight <= 500) {
//           textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height if less than 500px
//           textarea.style.overflowY = "hidden"; // Hide the scrollbar
//         } else {
//           textarea.style.height = "500px"; // Set the height to 500px
//           textarea.style.overflowY = "scroll"; // Show the scrollbar
//         }
//       };

//       // Adjust height on input
//       textarea.addEventListener("input", adjustHeight);

//       // Initial adjustment
//       adjustHeight();

//       // Cleanup event listener on component unmount
//       return () => {
//         textarea.removeEventListener("input", adjustHeight);
//       };
//     }
//   }, []);

//   useEffect(() => {
//     scrollDown();
//   }, [chat]);

//   const scrollDown = () => {
//     const chatContainer = chatContainerRef.current;
//     if (chatContainer) {
//       chatContainer.scrollTop = chatContainer.scrollHeight;
//     }
//   };

//   return (
//     <>
//       <div className="relative  w-full h-[90vh] mb-96">
//         <div className=" w-96 h-96 blur-[150px] fixed right-10 bg-green-500"></div>
//         <div className="hidden lg:block w-96 h-96 blur-[150px] fixed left-10 bottom-0 bg-green-500"></div>
//         <div
//           ref={chatContainerRef}
//           className="relative my-1 w-full md:w-8/12 mx-auto p-4  border scrollbar chatbox rounded-lg min-h-5/6  pb-20"
//           id="style-1"
//         >
//           {chat.map((val, ind) =>
//             val.request ? (
//               <div className=" my-2 block" key={ind}>
//                 <i className="bi bi-person-circle size-6 my-2 block"></i>
//                 <span className="bg-green-500 p-2 rounded-md inline-block ">
//                   {val.request}
//                 </span>
//               </div>
//             ) : (
//               <div className=" my-2 w-full" key={ind}>
//                 <img src={botimg} alt="ai" className="w-5 h-5 m-1" />
//                 <div className="bg-slate-700 p-2 rounded-md backdrop-filter bg-clip-padding backdrop-blur-sm bg-opacity-30">
//                   <AiResponse>{val.response}</AiResponse>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//         <PdfUpload
//           pdfWindow={pdfWindow}
//           updatePdfWindow={updatePdfWindow}
//           setChat={setChat}
//           setIsGenerating={setIsGenerating}
//         />
//         <div className="prompt-area fixed bottom-0 left-1/2 -translate-x-1/2 w-full md:w-8/12 flex items-end max-h-[500px] rounded-lg py-2 px-4 bg-gray-900 ">
//           <div
//             className={`fixed z-40 w-11/12 md:w-full -top-10 md:-top-10 left-1/2 -translate-x-1/2 rounded-full p-2  bg-green-500 ${
//               isGenerating ? "block" : "hidden"
//             }`}
//           >
//             &nbsp;
//             <i className="bi bi-gear text-2xl inline-block animate-spin"></i>
//             <p className=" text-2xl inline-block">&nbsp; Generating Response</p>
//           </div>

//           <textarea
//             ref={textareaRef}
//             type="text"
//             className="w-10/12 md:w-11/12 text-white bg-transparent rounded-xl border mx-1 p-2"
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             cols={"auto"}
//           />
//           {/* <div className="w-full border"> */}

//           {/* </div> */}
//           <div>
//             <button className="text-4xl my-1" onClick={()=> updatePdfWindow(true)}>
//             {/* <i className="bi bi-plus-circle text-green-400   "></i> */}
//             <i className="bi bi-file-earmark-plus-fill size-8"></i>
//             </button>
//             <button
//               className="bg-green-500 rounded-full hover:bg-green-800 my-1"
//               onClick={() => {
//                 setChat((prevData) => [...prevData, { request: prompt }]);
//                 generateResponse(prompt);
//                 setPrompt("");

//               }}
//             >
//               <i className="bi bi-send size-8 m-1 inline-block text-xl"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chatbot;

import React, { useState, useRef, useEffect } from "react";
import botimg from "./images/concisebot.png";
import AiResponse from "./components/AiResponse";
import Navbar from "./components/Navbar";
import { useUploadWindow } from "./useUploadWindow";
import PdfUpload from "./components/PdfUpload";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [chat, setChat] = useState([]);
  const textareaRef = useRef(null);
  const chatContainerRef = useRef(null);
  const { pdfWindow, updatePdfWindow } = useUploadWindow();

  useEffect(() => {
    console.log("Chatbot pdfWindow:", pdfWindow);
  }, [pdfWindow]);

  async function generateResponse(text) {
    try {
      setIsGenerating(true);
      const response = await fetch(process.env.REACT_APP_BOT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: text }),
      });
      const data = await response.json();
      console.log(data);
      setChat((prevData) => [...prevData, data]);
      setIsGenerating(false);
    } catch (err) {
      alert(err);
      setIsGenerating(true);
    }
  }

  useEffect(() => {
    console.log("use effect called");
    generateResponse("Hello");
    const textarea = textareaRef.current;
    if (textarea) {
      const adjustHeight = () => {
        textarea.style.height = "auto"; // Reset the height
        if (textarea.scrollHeight <= 500) {
          textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height if less than 500px
          textarea.style.overflowY = "hidden"; // Hide the scrollbar
        } else {
          textarea.style.height = "500px"; // Set the height to 500px
          textarea.style.overflowY = "scroll"; // Show the scrollbar
        }
      };

      // Adjust height on input
      textarea.addEventListener("input", adjustHeight);

      // Initial adjustment
      adjustHeight();

      // Cleanup event listener on component unmount
      return () => {
        textarea.removeEventListener("input", adjustHeight);
      };
    }
  }, []);

  useEffect(() => {
    scrollDown();
  }, [chat]);

  const scrollDown = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col  md:w-9/12 lg:w-8/12 mx-auto">
      {/* Background Effects */}
      <div className="absolute w-96 h-96 blur-[150px] bg-green-500 right-10 opacity-50" />
      <div className="hidden lg:block absolute w-96 h-96 blur-[150px] bg-green-500 left-10 bottom-0 opacity-50" />

      {/* Chat Area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-2 scrollbar  chatbox pb-[150px] lg:pb-[200px] md:pb-[250px] 
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        {/* {chat.map((val, ind) =>
          val.request ? (
            <div className="my-2 flex items-start" key={ind}>
              <i className="bi bi-person-circle text-3xl mr-2"></i>
              <span className="bg-green-500 text-black p-2 rounded-md">
                {val.request}
              </span>
            </div>
          ) : (
            <div className="my-2 flex items-start" key={ind}>
              <img src={botimg} alt="AI Bot" className="w-5 h-5 mr-2" />
              <div className="bg-slate-700 p-2 rounded-md backdrop-blur-sm bg-opacity-30">
                <AiResponse>{val.response}</AiResponse>
              </div>
            </div>
          )
        )} */}

        {chat.map((val, ind) =>
          val.request ? (
            <div className=" my-2 block" key={ind}>
              <i className="bi bi-person-circle size-6 my-2 block"></i>
              <span className="bg-green-500 p-2 rounded-md inline-block ">
                {val.request}
              </span>
            </div>
          ) : (
            <div className=" my-2 w-full" key={ind}>
              <img src={botimg} alt="ai" className="w-5 h-5 m-1" />
              <div className="bg-slate-700 p-2 rounded-md backdrop-filter bg-clip-padding backdrop-blur-sm bg-opacity-30">
                <AiResponse>{val.response}</AiResponse>
              </div>
            </div>
          )
        )}
      </div>

      {/* PDF Upload Component */}
      <PdfUpload
        pdfWindow={pdfWindow}
        updatePdfWindow={updatePdfWindow}
        setChat={setChat}
        setIsGenerating={setIsGenerating}
      />

      {/* Prompt Area - Fixed at Bottom */}
      <div className="w-full fixed bottom-0 left-1/2 -translate-x-1/2 bg-gray-800 flex items-end py-4 px-6 mx-auto md:w-9/12 lg:w-8/12 ">
        {isGenerating && (
          <div className="fixed z-40 w-11/12 md:w-full top-4 left-1/2 -translate-x-1/2 p-2 rounded-full bg-green-500 flex items-center justify-center">
            <i className="bi bi-gear text-2xl animate-spin mr-2"></i>
            <p className="text-lg">Generating Response...</p>
          </div>
        )}

        <textarea
          ref={textareaRef}
          className="flex-grow resize-none rounded-md p-2 outline-none bg-slate-700 text-white placeholder-gray-400"
          placeholder="Type your message..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="ml-2 p-2 rounded-full text-green-500 hover:text-green-700"
          onClick={() => updatePdfWindow(true)}
        >
          <i className="bi bi-file-earmark-plus-fill text-2xl"></i>
        </button>
        <button
          className="ml-2 p-2 hover:text-gray-400"
          onClick={() => {
            setChat((prevData) => [...prevData, { request: prompt }]);
            generateResponse(prompt);
            setPrompt("");
          }}
        >
          <i className="bi bi-send text-2xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
