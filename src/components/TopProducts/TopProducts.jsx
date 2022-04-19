import { Container, Typography } from '@mui/material';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Box } from '@mui/system';


const sectionBackground = {
    backgroundImage: 'url(https://i.ibb.co/DD9wNbL/asset-58.jpg)',
    height: '100vh',
    minHeight: '600px',
    width: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: 'inherit',
    backgroundRepeat: 'no-repeat'
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
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

export const products = [
    {
        name: "Leafy Green",
        image: "https://i.ibb.co/bNHNByV/asset-20.jpg",
        desc: "Lettuce, spinach and silverbeet"
    },
    {
        name: "Cruciferous",
        image: "https://i.ibb.co/xf015cj/asset-21.jpg",
        desc: "Cabbage, cauliflower, Brussels sprouts"
    },
    {
        name: "Marrow",
        image: "https://i.ibb.co/n7Tx646/asset-22.jpg",
        desc: "Pumpkin, cucumber and zucchine"
    },
    {
        name: "Root",
        image: "https://i.ibb.co/tQm20Lw/asset-23.jpg",
        desc: "Potato, sweet potato and yam"
    },
    {
        name: "Edible Stems",
        image: "https://i.ibb.co/KrDTt90/asset-18.jpg",
        desc: "Calery and asparagus"
    },
    {
        name: "Allium",
        image: "https://i.ibb.co/qk74gxj/asset-19.jpg",
        desc: "Onilon, garlic and shallot"
    },
    {
        name: "Tomato",
        image: "https://i.ibb.co/HHxqbwK/asset-34.jpg",
        desc: "Tomato, Mashroom and coriander"
    },
    {
        name: "Green Leaves",
        image: "https://i.ibb.co/MMRQXkt/asset-52.jpg",
        desc: "Lettuce leaves"
    },
    {
        name: "Capsicum",
        image: "https://i.ibb.co/bgq4FGP/asset-33.jpg",
        desc: "Three types capsicums"
    }

];

const TopProducts = () => {
    return (
        <div style={sectionBackground}>
            <Container>
                <Typography variant='h4' sx={{ mx: 'auto', py: 5, textAlign: 'center', fontWeight: '500' }}>
                    100% Organic Vegetables
                </Typography>
                <Box sx={{ mx: 2 }}>
                    <Slider {...settings}>
                        {
                            products?.map((product, pId) => <div key={pId}>
                                <Box sx={{ p: 2 }}>
                                    <img src={product?.image} alt="" width="100%" style={{ borderRadius: '50%' }} />
                                    <Typography variant="h5" sx={{ mt: 2, textAlign: 'center' }}>
                                        {product?.name}
                                    </Typography>
                                    <Typography variant="subtitle2" sx={{ textAlign: 'center' }}>
                                        {product?.desc}
                                    </Typography>
                                </Box>
                            </div>)
                        }
                    </Slider>
                </Box>
            </Container>
        </div>
    );
};

export default TopProducts;