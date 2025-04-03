import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';

import UserProvider from './providers/UserProvider';
import AuthGuard from './components/guards/AuthGuard';
import GuestGuard from './components/guards/GuestGuard';

import Header from './components/header/Header';
import ScooterEdit from './components/scooter-edit/ScooterEdit'
import Footer from './components/Footer';
import Home from './components/home/Home';
import Market from './components/market/Market';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Register from './components/register/Register';
import ScooterDetails from './components/scooter-details/ScooterDetails'
import ScooterCreate from './components/scooter-create/ScooterCreate';

import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          <Header />
          <main id="main-content">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/market" element={<Market />} />
              <Route path="/market/:scooterId/details" element={<ScooterDetails/>} />
              <Route path="/contacts" element={<Contact />} />
              <Route element={<AuthGuard />}>
                  <Route path="/market/create" element={<ScooterCreate />} />
                  <Route path="/market/:scooterId/edit" element={<ScooterEdit />} />
                  <Route path="/logout" element={<Logout />} />
                  </Route>
              <Route element={<GuestGuard />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
              </Route>
        </Routes>
          </main>
          <ToastContainer />
          <Footer />
        </Box>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
