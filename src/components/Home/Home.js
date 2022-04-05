import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';

import kid from '../../images/kid.png';
import Review from '../Review/Review';

import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReview([]);
    return (
        <div>
            <div className='container'>
                <div className="row d-flex align-items-center m-5">
                    <div className="col mt-5 text-start">
                        <h1 className='homeheadings'>Come And Get The Best</h1>
                        <h1 className='homeheadings'> Diaper For your BABY.</h1>
                        <p className='mt-4'>We have got all types of diapers. You can visit our site to get the best diaper suited for your baby with just one click. So <b>Just HURRY</b> and get what you want.</p>
                    </div>
                    <div className="col">
                        <img src={kid} className='img-fluid mt-5' alt="" />
                    </div>
                </div>
            </div>

            <div className='review-container'>
                {
                    reviews.map(review => review.id < 4 && <Review key={review.id} review={review}></Review>)
                }
            </div>
            <Link className='btn' to='/reviews'>See All Review</Link>

        </div>
    );
};

export default Home;