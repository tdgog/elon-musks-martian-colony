import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
} from '@mui/material';
import {
    Menu as MenuIcon
} from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom';

const pages = {
    'Home': '',
    'Jobs': 'jobs',
    'Food & Drink': 'food',
    'Pets': 'pets'
}
const settings = ['Account', 'Remaining Debt']

function SmallScreenMenu({ handleOpenNavigationMenu, handleCloseNavigationMenu, anchorElNavigation }) {
    let navigate = useNavigate();
    
    return <Box className='flex md:hidden' sx={{ flexGrow: 1 }}>
        <IconButton
            size="large"
            aria-label="Menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavigationMenu}
            color="inherit"
        >
            <MenuIcon className='text-white' />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNavigation}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNavigation)}
            onClose={handleCloseNavigationMenu}
            className={`
                mt-1
                [&>.MuiPaper-root]:bg-zinc-300
                dark:[&>.MuiPaper-root]:bg-zinc-700 dark:[&>.MuiPaper-root]:text-zinc-300
            `}
        >
            {Object.keys(pages).map((page) => (
                <MenuItem key={page} onClick={() => {
                    handleCloseNavigationMenu();
                    navigate(pages[page]);
                }}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
}

function LargeScreenMenu({ handleCloseNavigationMenu }) {
    let navigate = useNavigate();
    let location = useLocation();
    let currentPath = location.pathname;

    return <Box className='hidden md:flex' sx={{ flexGrow: 1 }}>
        {Object.keys(pages).map((page) => {
            console.log(currentPath.substring(1), pages[page], currentPath.substring(1) === pages[page] && 'text-white');
            return <button
                key={page}
                onClick={() => {
                    handleCloseNavigationMenu();
                    navigate(pages[page]);
                }}
                className={`
                    mx-1 px-3 py-1 rounded-lg block transition-all
                    hover:bg-[rgba(0,0,0,.1)] bg-[rgba(0,0,0,0)]

                    ${currentPath.substring(1) === pages[page] ? 'text-white' : 'text-zinc-400'}
                `}
            >
                <Typography>{page}</Typography>
            </button>
        })}
    </Box>
}

function Logo({ isLargeScreen }) {
    return isLargeScreen 
        ? <div className='hidden md:flex'>
            <img src='https://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png' className='h-10' alt='Logo' />
        </div> 
        : <Box className='flex md:hidden' sx={{ flexGrow: 1 }}>
            <img src='https://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png' className='h-10' alt='Logo' />
        </Box>
}

function AccountButton({ handleOpenUserMenu, handleCloseUserMenu, anchorElUser }) {
    return <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Your Account">
            <IconButton onClick={handleOpenUserMenu} className='p-0'>
                <Avatar alt="Tempuser" src="https://ichef.bbci.co.uk/news/976/cpsprodpb/15E47/production/_124717698_gettyimages-1395200655.jpg" />
            </IconButton>
        </Tooltip>
        <Menu
            className={`
                mt-12
                [&>.MuiPaper-root]:bg-zinc-300
                dark:[&>.MuiPaper-root]:bg-zinc-700 dark:[&>.MuiPaper-root]:text-zinc-300
            `}
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
}

export default function Navigation() {
    const [anchorElNavigation, setAnchorElNavigation] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    return <div className='bg-zinc-200 dark:bg-zinc-800 w-screen h-20 flex items-center drop-shadow-2xl'>
        <Container maxWidth='xl' className='bg-zinc-200 dark:bg-zinc-800'>
            <Toolbar disableGutters>
                <Logo isLargeScreen />
                <SmallScreenMenu
                    handleOpenNavigationMenu={(event) => { setAnchorElNavigation(event.currentTarget); }}
                    handleCloseNavigationMenu={() => { setAnchorElNavigation(null); }}
                    anchorElNavigation={anchorElNavigation}
                />
                <Logo />
                <LargeScreenMenu
                    handleCloseNavigationMenu={() => { setAnchorElNavigation(null); }}
                />
                <AccountButton
                    handleOpenUserMenu={(event) => { setAnchorElUser(event.currentTarget); }}
                    handleCloseUserMenu={() => { setAnchorElUser(null); }}
                    anchorElUser={anchorElUser}
                />
            </Toolbar>
        </Container>
    </div>
}
