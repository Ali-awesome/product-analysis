import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <div>
            <h1><strong>Customer Reviews</strong></h1>
            <div className='review-container'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>

    );
};

export default Reviews;