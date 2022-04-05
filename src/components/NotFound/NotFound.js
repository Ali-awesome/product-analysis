import React from 'react';
import { Link } from 'react-router-dom';
import no from '../../images/notfound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='title'>
                <h1>The site You are looking for is not available.</h1>
            </div>
            <div className='image'>
                <img className='noimg' src={no} alt="" />
            </div>
            <Link className='btn' to='/home'>Back To Home</Link>
        </div>
    );
};

export default NotFound;