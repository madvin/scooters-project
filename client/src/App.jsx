import React from 'react';
import { Routes, Route } from 'react-router';

import UserProvider from './providers/UserProvider';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Market from './components/Market/Market';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

// import { UserContext } from "./contexts/UserContext";
// import { authData } from "./hooks/useAuth";
// import { userLoginHandler, userLogoutHandler } from "./hooks/useAuth";

function App() {
  return (
    <UserProvider>
      <div id="box">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      </div>
   
    </UserProvider>
  );
}

export default App;
