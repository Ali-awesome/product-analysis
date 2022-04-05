import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    return (
        <nav className='nav'>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
            </div>
        </nav>
    );
};

export default Nav;