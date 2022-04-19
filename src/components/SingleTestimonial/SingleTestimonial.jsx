import { Box, Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const SingleTestimonial = ({ review }) => {
    return (
        <div style={{ margin: '15px' }}>
            <Card>
                <CardContent>
                    <Grid container sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'space-around' }, alignItems: 'center', flexDirection: { xs: 'column', md: 'row', lg: 'row' } }}>
                        <Grid item xs={12} md={6} lg={6}>
                            <img src={review?.customerImage} alt="" width="60%" style={{ margin: 'auto', border: '3px solid gray', borderRadius: '50%' }} />
                        </Grid>
                        <Grid item xs={12} md={6} lg={6}>
                            <Typography variant="h6" sx={{ color: '#1BAB42' }}>
                                {review?.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ pt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Rating name="read-only" value={review?.rating} readOnly sx={{ my: 2 }} />
                        <Typography variant='body1'>
                            {review?.review}
                        </Typography>
                    </Box>

                </CardContent>
            </Card>
        </div>

    );
};

export default SingleTestimonial;