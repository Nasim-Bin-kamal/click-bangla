import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { MenuItem } from '@mui/material';

const drawerWidth = 240;

const adminPages = [
    {
        pageTitle: 'Manage Product',
        pageLink: '/dashboard/manageProducts'
    },
    {
        pageTitle: 'Add Products',
        pageLink: '/dashboard/addProducts'
    },
    {
        pageTitle: 'Manage Orders',
        pageLink: '/dashboard/manageOrders'
    }
];

const userPages = [
    {
        pageTitle: 'My Orders',
        pageLink: '/dashboard/myOrders'
    },
    {
        pageTitle: 'Add Review',
        pageLink: '/dashboard/addReview'
    }
];

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <img src="https://i.ibb.co/p1x5173/Screenshot-2021-12-21-011139-removebg-preview.png" alt="" width="100%" />
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

                {adminPages.map((adminPage, index) => (
                    <ListItem button key={index}>
                        {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} /> */}

                        <Link to={adminPage?.pageLink} style={{ textDecoration: 'none' }}>

                            <MenuItem>
                                <Typography textAlign="center" sx={{ color: "black" }}>{adminPage?.pageTitle}</Typography>
                            </MenuItem>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
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
                    <Typography variant="h6" noWrap component="div" sx={{ color: '#1bab42' }}>
                        Dashboard
                    </Typography>
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
