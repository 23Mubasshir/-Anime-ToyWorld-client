import React from 'react';
import Banner from '../Banner/Banner';
import WhyBest from '../WhyBest/WhyBest';
import Review from '../Review/Review';
import Stat from '../Stat/Stat';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <Gallery></Gallery>
            <Shop></Shop>
            <Review></Review>
            <WhyBest></WhyBest>
        </div>
    );
};

export default Home;