import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../StyledComponents/MyButton';

const vegetableTypes = [
    {
        type: "Seasonal",
        image: "https://i.ibb.co/tQm20Lw/asset-23.jpg"
    },
    {
        type: "Un Seasonal",
        image: "https://i.ibb.co/KrDTt90/asset-18.jpg"
    },
    {
        type: "All Seasons",
        image: "https://i.ibb.co/qk74gxj/asset-19.jpg"
    }
];

const ProductTypes = () => {
    return (
        <div>
            <Container sx={{ my: 10 }}>
                <Grid container spacing={4}>
                    {
                        vegetableTypes?.map((singleType, i) => <Grid key={i} item xs={12} md={6} lg={4}>
                            <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                            {singleType?.type} Vegetables
                                        </Typography>
                                        <Link to="/shop" style={{ textDecoration: 'none' }}>
                                            <MyButton sx={{ mt: 5 }}>Shop Now</MyButton>
                                        </Link>
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 180 }}
                                    image={singleType?.image}
                                    alt="vegetables"
                                />
                            </Card>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default ProductTypes;