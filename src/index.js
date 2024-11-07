import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import Chatbot from "./Chatbot";
import { path } from "framer-motion/client";
import App from "./App";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/chatbot",
        element:<Chatbot/>
      }
      
    ]
  },
  // {
  //   path: "/chatbot",
  //   element: <Chatbot />,
  // },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);
