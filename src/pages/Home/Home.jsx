import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import FlashSale from "../../components/FlashSale/FlashSale";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import ProductTypes from "../../components/ProductTypes/ProductTypes";
import Testimonial from "../../components/Testimonial/Testimonial";
import TopProducts from "../../components/TopProducts/TopProducts";
import TopView from "../../components/TopView/TopView";

const Home = () => {
  return (
    <div>
      <Header />
      <TopView />
      <ProductTypes />
      <FlashSale />
      <TopProducts />
      <NewArrivals />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
