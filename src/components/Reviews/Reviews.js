import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <div className='review-container'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;