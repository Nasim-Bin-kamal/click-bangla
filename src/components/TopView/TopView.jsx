import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import CategoryIcon from '@mui/icons-material/Category';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { GiFruitBowl } from "react-icons/gi";
import TopSlider from '../TopSlider/TopSlider';

const TopView = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Container>
                <Grid container sx={{ mx: 'auto', mt: 1, mb: 3 }} spacing={0}>
                    <Grid item sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }} md={3} lg={3} >
                        <Paper>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        <Typography variant='h5' sx={{ my: 1, pt: 2 }}>
                                            <CategoryIcon /> Categories
                                        </Typography>
                                        <hr />
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <KitchenIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Grocery" />
                                </ListItemButton>

                                <ListItemButton>
                                    <ListItemIcon>
                                        <GiFruitBowl />
                                    </ListItemIcon>
                                    <ListItemText primary="Fruits" />
                                </ListItemButton>
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <GiFruitBowl />
                                    </ListItemIcon>
                                    <ListItemText primary="Vegetables" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>

                                            </ListItemIcon>
                                            <ListItemText primary="Winter items" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItemIcon>

                                            </ListItemIcon>
                                            <ListItemText primary="Summer items" />
                                        </ListItemButton>
                                    </List>
                                </Collapse>
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={9} lg={9} sx={{ mx: "auto" }}>
                        <TopSlider />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default TopView;