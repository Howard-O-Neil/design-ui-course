import React, { ChangeEvent, FormHTMLAttributes } from "react";
import styles from './App.module.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext";
import Footer from "./footer/footer";
import Landing from "./landing/landing";

export const BACKEND_PUBLIC_API = "http://localhost:3002/sound-sharing-pub/v1"
export const BACKEND_APP_API = "http://localhost:3002/sound-sharing/v1"
export const CDN_API = "http://128.0.3.3:5001"
export const HLS_API = "http://128.0.3.2/hls"

const App = () => {
  return (
    <div className={styles.App}>


      {/* <MainGrid childElement={<SignIn />}/> */}
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<div>Index Page, Please Leave</div>} />
            <Route path="/landing" element={<Landing />} />

          </Routes>
        </AppProvider>
      </BrowserRouter>

    </div>
  )
};

export default App;
