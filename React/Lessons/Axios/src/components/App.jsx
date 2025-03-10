import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar'
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Profile from "./Profile";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile/:username" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;