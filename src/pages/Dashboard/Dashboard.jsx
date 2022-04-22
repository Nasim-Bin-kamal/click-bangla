import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';
import { MenuItem } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { CgProfile } from "react-icons/cg";

const drawerWidth = 240;

const adminPages = [
    {
        pageTitle: 'Manage Product',
        pageLink: '/dashboard/manage-products'
    },
    {
        pageTitle: 'Add Products',
        pageLink: '/dashboard/add-product'
    },
    {
        pageTitle: 'Manage Orders',
        pageLink: '/dashboard/manage-orders'
    },
    {
        pageTitle: 'Add Admin',
        pageLink: '/dashboard/add-admin'
    }
];

const userPages = [
    {
        pageTitle: 'My Orders',
        pageLink: '/dashboard/my-orders'
    },
    {
        pageTitle: 'Add Review',
        pageLink: '/dashboard/add-review'
    }
];

function Dashboard(props) {
    const { user, admin, userSingOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <img src="https://i.ibb.co/NVZd7cf/click-bangla-dark.png" alt="" width="100%" />

            </Toolbar>
            <Divider />
            <List>
                <ListItem button>
                    <Link to="/home" style={{ textDecoration: 'none' }}>
                        <MenuItem >
                            <Typography textAlign="center" sx={{ color: "black" }}>Home</Typography>
                        </MenuItem>
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to="/shop" style={{ textDecoration: 'none' }}>
                        <MenuItem >
                            <Typography textAlign="center" sx={{ color: "black" }}>Shop</Typography>
                        </MenuItem>
                    </Link>
                </ListItem>

                {
                    admin && <>
                        {adminPages.map((adminPage, index) => (
                            <ListItem button key={index}>

                                <Link to={adminPage?.pageLink} style={{ textDecoration: 'none' }}>

                                    <MenuItem >
                                        <Typography textAlign="center" sx={{ color: "black" }}>{adminPage?.pageTitle}</Typography>
                                    </MenuItem>
                                </Link>
                            </ListItem>
                        ))}
                    </>
                }


            </List>
            <Divider />
            <List>
                {
                    (user && !admin) && <>
                        {userPages?.map((userPage, index) => (
                            <ListItem button key={index}>
                                {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} /> */}

                                <Link to={userPage?.pageLink} style={{ textDecoration: 'none' }}>

                                    <MenuItem>
                                        <Typography textAlign="center" sx={{ color: "black" }}>{userPage?.pageTitle}</Typography>
                                    </MenuItem>
                                </Link>
                            </ListItem>
                        ))}
                    </>
                }

                <ListItem button onClick={userSingOut}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <MenuItem >
                            <Typography textAlign="center" sx={{ color: "red" }}>Log Out</Typography>
                        </MenuItem>
                    </Link>
                </ListItem>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#E2F3DD'
                }}
            >

                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box >

                        <Typography variant="h6" noWrap component="div" sx={{ color: '#1bab42' }}>
                            Dashboard
                        </Typography>

                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: '' }}
            >
                <Toolbar />
                <Outlet />

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
