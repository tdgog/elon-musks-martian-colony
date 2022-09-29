import React, { useState } from 'react';
import {
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Tooltip,
    MenuItem,
} from '@mui/material';
import {
    Menu as MenuIcon
} from '@mui/icons-material'
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/SpaceXLogo.png';


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
    const LogoSVG = () => <svg version="1.1" x="0px" y="0px" viewBox="0 0 400 50">
        <title>SpaceX Logo</title>
        <g class="letter_s">
            <path class="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
      c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"></path>
        </g>
        <g class="letter_p">
            <path class="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
      c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"></path>
        </g>
        <g class="letter_a">
            <polygon class="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"></polygon>
        </g>
        <g class="letter_c">
            <path class="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
      c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"></path>
        </g>
        <g class="letter_e">
            <polygon class="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"></polygon>
            <rect class="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"></rect>
        </g>
        <g class="letter_x">
            <path class="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"></path>
            <path class="fill-white" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"></path>
        </g>
        <g class="letter_swoosh">
            <path class="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"></path>
        </g>
    </svg>

    return isLargeScreen
        ? <div className='hidden md:flex w-36'>
            <LogoSVG />
        </div>
        : <Box className='flex md:hidden' sx={{ flexGrow: 1 }}>
            <img src={logo} className='h-10' alt='SpaceX' />
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
