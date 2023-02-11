import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick/lib/slider";

const sliderItems = [
  { image: "https://i.ibb.co/Q9xb82X/banner-1.png" },
  { image: "https://i.ibb.co/V3wj2NF/image.png" },
  { image: "https://i.ibb.co/CJNjGgN/image-1.png" },
];

const TopSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Slider {...settings}>
        {sliderItems.map((item, i_id) => (
          <img
            key={i_id}
            src={item?.image}
            alt=""
            style={{ height: "100vh" }}
          ></img>
        ))}
      </Slider>
    </Box>
  );
};

export default TopSlider;
