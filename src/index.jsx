/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";

function App() {
    return (
      <BrowserRouter>
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
            <Link to="/about">About</Link>
            <Link to="/vans">Vans</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={ <About /> } />
            <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    )
  }

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
