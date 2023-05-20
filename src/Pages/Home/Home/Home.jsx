import React from 'react';
import Banner from '../Banner/Banner';
import WhyBest from '../WhyBest/WhyBest';
import Review from '../Review/Review';
import Stat from '../Stat/Stat';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <Gallery></Gallery>
            <WhyBest></WhyBest>
            <Review></Review>
        </div>
    );
};

export default Home;