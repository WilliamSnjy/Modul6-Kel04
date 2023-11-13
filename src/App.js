import React from "react";
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
import { HiHome, HiDocument } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';


// Pages
import LandingPage from "./pages/LandingPage";
import Profile from "./components/menu/profile";
import Detail from "./pages/detail";


// Components
import Header from "./components/header";


import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/movie" element={<LandingPage />}/>
            <Route path="/detail" element={<Detail />}/>
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <div className="footer">
        <Link to="/movie" className='iconWrapper'>
            <HiHome className="icon" /> Movie
        </Link>
        <Link to="/detail" className='iconWrapper'>
            <HiDocument className="icon" /> Detail
        </Link>
        <Link to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
        </Link>
        </div>
        </BrowserRouter>
    </div>
  );
}


export default App;
