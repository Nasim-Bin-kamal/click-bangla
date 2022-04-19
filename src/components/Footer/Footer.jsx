import React from 'react';
import { Button, Container, Grid, List, ListItem, makeStyles, TextField, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';



const Footer = () => {

    const style = {
        textDecoration: 'none',
        color: '#e6e6e1'
    }

    return (
        <div style={{ backgroundColor: '#0dbf57' }}>
            <Container>
                <Grid container spacing={2} sx={{ py: 5, color: '#FFF' }}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Typography variant="h6">
                            Address
                        </Typography>
                        <Box sx={{ display: 'flex', pt: 1 }}>
                            <LocationOnIcon sx={{ color: '#e6e6e1' }} />
                            <Typography variant="body1" sx={{ color: '#e6e6e1' }}>
                                H#000 (0th Floor), Road #00,
                                New DOHS, Mohakhali, Dhaka, Bangladesh
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" sx={{ mt: 2 }}>
                                Social Links
                            </Typography>
                            <FacebookIcon sx={{ mr: 2, my: 2, cursor: 'pointer' }} />
                            <InstagramIcon sx={{ mr: 2, my: 2, cursor: 'pointer' }} />
                            <YouTubeIcon sx={{ mr: 2, my: 2, cursor: 'pointer' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                        <Typography variant="h6">
                            Company
                        </Typography>
                        <List dense>
                            <ListItem>
                                <NavLink style={style} to="/about">About</NavLink>
                            </ListItem>
                            <ListItem >
                                <NavLink style={style} to="/contactt">Contact</NavLink>
                            </ListItem>
                            <ListItem >
                                <NavLink style={style} to="/team">Our Team</NavLink>
                            </ListItem>
                            <ListItem >
                                <NavLink style={style} to="/terms">Terms Conditions</NavLink>
                            </ListItem>

                        </List>
                    </Grid>
                    <Grid item xs={12} md={2} lg={2}>
                        <Typography variant="h6">
                            Quick Links
                        </Typography>
                        <List dense>
                            <ListItem>
                                <NavLink style={style} to="/contact">Contact</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink style={style} to="/projects">Shops</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink style={style} to="/blogs">Blogs</NavLink>
                            </ListItem>
                            <ListItem>
                                <NavLink style={style} to="/terms">Terms Conditions</NavLink>
                            </ListItem>

                        </List>
                    </Grid>
                    <Grid item xs={12} md={2} lg={4}>
                        <Typography variant="h6">Subscribe Us</Typography>
                        <Typography variant="body1" sx={{ color: '#e6e6e1', py: 2 }}>
                            If you want to know about our updated news, subscribe to our newsletter
                        </Typography>
                        <TextField type="email" size="small" placeholder="Your email" sx={{ width: '80%', backgroundColor: '#FFF8F5', border: '0px', borderRadius: '5px' }} ></TextField>
                        <Button variant="contained" sx={{ backgroundColor: '#FFF8F5', color: '#0dbf57', py: 1 }} >
                            <SendIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Box>
                <Typography variant='body1' sx={{ mx: 'auto', py: 3, px: 1, color: '#fff', fontWeight: 300, textAlign: 'center', backgroundColor: '#068c3e' }}>
                    All Rights Reserved By Organic Store || 2021
                </Typography>
            </Box>
        </div >
    );
};

export default Footer;