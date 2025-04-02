import React from 'react';
import { Routes, Route } from 'react-router';
import { Box, useTheme } from '@mui/material';

import UserProvider from './providers/UserProvider';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';

import Header from './components/header/Header';
import ScooterEdit from './components/scooter-edit/ScooterEdit'
// import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Market from './components/market/Market';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import ScooterDetails from './components/scoooter-details/ScooterDetails'

// import { UserContext } from "./contexts/UserContext";
// import { authData } from "./hooks/useAuth";
// import { userLoginHandler, userLogoutHandler } from "./hooks/useAuth";

function App() {

  const theme = useTheme();

  return (
    <UserProvider>
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            textAlign: 'center',
            padding: 2,
          }}
      >
        <Header/>
        <main id="main-content">
        <Routes>
        <Route index element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/:scooterId/details" element={<ScooterDetails/>} />
        <Route path="/contacts" element={<Contact />} />
        <Route element={<AuthGuard />}>
            <Route path="/market/create" element={<ScooterDetails />} />
            <Route path="/market/:scooterId/edit" element={<ScooterEdit />} />
            <Route path="/logout" element={<Logout />} />
            </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
        </main>
   
      </Box>

      <Footer />
     
    </UserProvider>
  );
}

export default App;
