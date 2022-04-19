import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NewArrivals from '../../components/NewArrivals/NewArrivals';
import ProductTypes from '../../components/ProductTypes/ProductTypes';
import Testimonial from '../../components/Testimonial/Testimonial';
import TopBanner from '../../components/TopBanner/TopBanner';
import TopProducts from '../../components/TopProducts/TopProducts';
import TopView from '../../components/TopView/TopView';


const Home = () => {
    return (
        <div>
            <Header />
            <TopView />
            {/* <TopBanner /> */}
            <ProductTypes />
            <TopProducts />
            <NewArrivals />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;