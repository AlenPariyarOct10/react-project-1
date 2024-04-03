import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Suspense } from "react";
import { AppContextProvider } from "./component/ContextAPI";
import { Provider } from "react-redux";



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <Suspense fallback={"....loding"}>
        <AppContextProvider>
        <RouterProvider router={MainRouter}></RouterProvider>
        </AppContextProvider>
    </Suspense>

  </React.StrictMode>
);

reportWebVitals();