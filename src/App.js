import AuthForm from "./components/authForm";
import Carousel from "./components/Carousel/Carousel";
import Slider from "./components/slider/slider";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link ,Navigate } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [auth , setAuth] = useState()
  const setGoogleAuth = (args) => {
    setAuth(args)
  }
  const setFacebookAuth = (args) => {
     setAuth(args)
  }
  return (
    // <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto">
       <Routes>
        <Route path="/" element={auth!==undefined ? <Navigate to="/home" /> : <AuthForm setFacebookAuth={setFacebookAuth} setGoogleAuth={setGoogleAuth} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>

    // </div>
  );
}

export default App;
