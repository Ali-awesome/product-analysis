import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, body, rating } = review;
    return (
        <div>
            <div className='review'>
                <h3>Name: {name}</h3>
                <p>Review: {body}</p>
                <h4>Rating: {rating}</h4>
            </div>

        </div>
    );
};

export default Review;