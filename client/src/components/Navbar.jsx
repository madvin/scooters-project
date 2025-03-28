import { Link } from 'react-router-dom';
import React from 'react';

const Navbar =  () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
}

export default Navbar;