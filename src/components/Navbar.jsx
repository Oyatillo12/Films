import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications'
import StarRateIcon from '@mui/icons-material/StarRate';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PATH } from '../hooks/usePath';
import { NavLink } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LogoImg from '../assets/images/nav-logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import CustomSearch from './CustomSearch';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const navbarList = [
    {
      id: 1,
      path: PATH.home,
      title: 'Home',
      icon: <HomeIcon />
    },
    {
      id: 2,
      path: PATH.nowPlaying,
      title: 'Now Playing',
      icon: <PlayCircleIcon />
    },
    {
      id: 3,
      path: PATH.popular,
      title: 'Popular',
      icon: <StarRateIcon />
    },
    {
      id: 4,
      path: PATH.topRated,
      title: 'Top Rated',
      icon: <TrendingUpIcon />
    },
    {
      id: 5,
      path: PATH.upcoming,
      title: 'Up Coming',
      icon: <MoveToInboxIcon />
    }
  ]




  return (
    <Box className='' sx={{ flexGrow: 1 }}>
      <AppBar className='!max-w-[1280px] !w-full !mx-auto !backdrop-blur-[5px] !inset-x-0 !top-6  !rounded-md' position="fixed">
        <Toolbar className='flex !bg-[#151515E5] py-[10px] !rounded-md !backdrop-blur-[5px] justify-between items-center'>
          <IconButton
            className='sm:!hidden'
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={LogoImg} alt="logo img" width={154} height={22} />
          <Typography
            className='flex space-x-8 items-center'
            variant="h6"
            noWrap
            component="div"
          >
            {navbarList.map(item => <NavLink key={item.id} to={item.path}>{item.title}</NavLink>)}
          </Typography>


          <Box className='flex space-x-4' sx={{ flexFlow: 1 }} >
            <CustomSearch />
            <Box sx={{ display: 'flex' }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton >
              <IconButton onClick={() => navigate('movies/liked')}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}