import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import for react-router-dom v6

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './component/Footer';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>

      </Router>
      <Footer/>
        

    </div>
  )
}

export default App


