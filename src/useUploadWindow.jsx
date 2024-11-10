import { useState } from "react";

export const useUploadWindow = () => {
  const [pdfWindow, setPdfWindow] = useState(false);

  return {
    pdfWindow,
    updatePdfWindow: (windowState) => {
      console.log("Window State Change:", windowState);
      setPdfWindow(windowState);
    },
  };
};