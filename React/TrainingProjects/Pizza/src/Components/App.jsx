import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

    return(
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