import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MyButton from '../StyledComponents/MyButton';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';



const TopBanner = () => {
    return (
        <div style={{ backgroundColor: '#E2F3DD', height: '100vh', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
            <Container>
                <Grid container spacing={2} sx={{ mx: 'auto', alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={5} sx={{ mx: 'auto', px: 2 }}>
                        <Typography variant="" sx={{ lineHeight: '5rem', fontWeight: 700, color: '#1bab42', fontSize: { xs: '20px', md: '40px', lg: '60px' } }}>
                            ORGANIC VEGETABLES
                        </Typography>
                        <Typography variant="h6">
                            All products are from our won farm
                        </Typography>
                        <Typography variant="body1" sx={{ my: 3, color: 'text.secondary' }}>
                            We. Provide organic vegetables.All kinds of seasonal Fresh vegetables are here. You can purchase without any doubt of freshness.
                        </Typography>
                        <MyButton sx={{ my: 2 }}>Read More<DoubleArrowIcon /></MyButton>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={7} sx={{ mx: 'auto', px: 2 }}>
                        <img src="https://i.ibb.co/8BDV8Qv/asset-15-1.png" alt="" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default TopBanner;