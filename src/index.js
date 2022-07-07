import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "flowbite";
import { Flowbite } from "flowbite-react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Flowbite
        theme={{
          theme: {
            navbar: {
              base: "px-2 py-2.5 sm:px-4",
              collapse: {
                list: "mt-4 flex flex-col md:items-center md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
              },
              link: {
                active: {
                  on: "bg-primary text-white dark:text-white md:bg-transparent md:text-primary",
                  off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary md:dark:hover:bg-transparent md:dark:hover:text-white",
                },
              },
            },
          },
        }}>
        <App />
      </Flowbite>
    </React.StrictMode>
  </BrowserRouter>
);
