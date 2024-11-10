import React, { useEffect, useState } from "react";
import axios from "axios";
import ToggleButton from "./ToggleButton";

const PdfUpload = ({ pdfWindow, updatePdfWindow, setChat,setIsGenerating  }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSummarizeOn, setIsSummarizeOn] = useState(true);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    console.log("PdfUpload pdfWindow:", pdfWindow);
  }, [pdfWindow]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }
    if (!isSummarizeOn) {
      if (!textInput) {
        alert("plase add prompt");
        return;
      }
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);
    formData.append("customPrompt", textInput);

    try {
      setIsGenerating(true)
      const response = await axios.post(
        process.env.REACT_APP_PDF_URL,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // alert("File uploaded successfully!");
      // (function(){
      //   showToast();
      //   console.log("show toast");
        
      // })

      // console.log(response.data.message);
      setChat((prevData) => [...prevData, { response: response.data.summary }]);
      setIsGenerating(false)
    } catch (error) {
      setChat((prevData) => [
        ...prevData,
        { response: `Error uploading file ${error}` },
      ]);
      setIsGenerating(false)
      // console.error(":", error);
      alert(error);
    }

    updatePdfWindow(false);
  };

  return (
    <div
      className={`w-full md:w-1/2 h-auto rounded-lg bg-slate-800 absolute ${
        pdfWindow ? "block" : "hidden"
      } top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4`}
    >
      <button
        className="cursor-pointer absolute right-1 top-0 text-xl hover:text-red-500"
        onClick={() => updatePdfWindow(false)}
      >
        <i className="bi bi-x-square"></i>
      </button>
      <p className="text-center">Select PDF to Upload</p>
      <div className="w-full text-6xl text-center mt-4">
        <label htmlFor="upload-pdf" className="cursor-pointer">
          <i className="bi bi-cloud-upload"></i>
        </label>
        <input
          type="file"
          accept="application/pdf"
          id="upload-pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      {selectedFile && (
        <p className="text-center mt-2 text-lg">{selectedFile.name}</p>
      )}

      {/* Toggle Button for Summarize PDF */}
      <div className="mt-2 text-center">
        <button
          className={`px-4 py-2 rounded-full text-white  flex justify-center items-center mx-auto`}
        >
          {isSummarizeOn ? "Summarize PDF" : "Summarize PDF"}
          &nbsp;{" "}
          <ToggleButton
            isChecked={isSummarizeOn}
            setIsSummarizeOn={setIsSummarizeOn}
            onClick={() => setIsSummarizeOn(!isSummarizeOn)}
          />
        </button>
      </div>

      {/* Text Area for Input if Toggle is Off */}
      {!isSummarizeOn && (
        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Prompt Based on PDF you selected !.."
          className="mt-4 w-full h-32 p-2 rounded-lg bg-slate-700 text-white resize-none outline-none"
        />
      )}
      <button
        onClick={handleFileUpload}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full block mx-auto"
      >
        Upload
      </button>
    </div>
  );
};

export default PdfUpload;
