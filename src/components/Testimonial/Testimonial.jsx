import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../redux/slices/productSlice';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';
import Slider from 'react-slick';



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Testimonial = () => {
    const dispatch = useDispatch();
    const { reviews } = useSelector(state => state?.products)
    // console.log(allProducts);

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch])
    console.log(reviews);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ my: 10 }}>
                <Typography variant="h6" sx={{ mx: 'auto', textAlign: 'center' }}>
                    Testimonial
                </Typography>
                <Typography variant="h4" sx={{ mx: 'auto', textAlign: 'center', textTransform: 'capitalize', fontWeight: 500 }}>
                    Whats our Customer Says
                </Typography>

                <Box sx={{ mx: 2, my: 5 }}>
                    <Slider {...settings}>
                        {
                            reviews?.map((review) => (<SingleTestimonial key={review?._id} review={review} />))
                        }
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonial;