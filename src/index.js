import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./router/MainRouter";
import { Suspense } from "react";
import { AppContextProvider } from "./component/ContextAPI";
import { Provider } from "react-redux";
import { store, persistor } from './redux/Store';
import { PersistGate } from "redux-persist/integration/react";




const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
    <Suspense fallback={"....loding"}>
      <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
          <AppContextProvider>
            <RouterProvider router={MainRouter}></RouterProvider>
          </AppContextProvider>
    </PersistGate>
      </Provider>

    </Suspense>
  </React.StrictMode>
);

reportWebVitals();