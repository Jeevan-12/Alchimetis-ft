import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  Box,
  Button,
  Drawer,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import LogoutIcon from '@mui/icons-material/Logout';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { useNavigate } from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import Pegion from '../../images/Icon/Pegion.png';

const Header = ({ children, theme, setTheme }) => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
      sx={{
        height: '100vh',
        padding: '25px 10px',
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.backgroundColor,
        color: theme.color,
        borderRight: theme.color == 'white' ? '1px solid white' : 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            columnGap: '10px',
            alignItems: 'center',
          }}
        >
          <img
            src={Pegion}
            alt={'logo'}
            style={{
              width: '25%',
              borderRadius: '15px',
            }}
          />
          <Box>
            <Typography>PIGEON UI</Typography>
            <Typography>Pigeonui@demo.com</Typography>
          </Box>
        </Box>
        <TextField
          id="outlined-start-adornment"
          //   sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search"
          sx={{
            backgroundColor: 'white',
            // borderRadius: "20px",
            '&:hover': {
              border: 'none',
              outline: 'none',
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            columnGap: '10px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => navigate('/')}
        >
          <GridViewIcon />
          <Typography>Dashboard</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            columnGap: '10px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => navigate('/Assembly')}
        >
          <NotificationsIcon />
          <Typography>Assembly</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            columnGap: '10px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => navigate('/Data')}
        >
          <NotificationsIcon />
          <Typography>Data</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            columnGap: '10px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <BatteryChargingFullIcon />
          <Typography>Battery</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            columnGap: '10px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <BrandingWatermarkIcon />
          <Typography>Stamping</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            columnGap: '10px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        >
          <LogoutIcon />
          <Typography>Logout</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            columnGap: '10px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={changeTheme}
        >
          <Brightness5Icon />
          <Typography>Toggle mode</Typography>
        </Box>
      </Box>
    </Box>
  );

  const changeTheme = () => {
    if (theme.backgroundColor == 'black') {
      setTheme({
        backgroundColor: 'white',
        color: 'black',
      });
    } else {
      setTheme({
        backgroundColor: 'black',
        color: 'white',
      });
    }
  };

  return (
    <Box
      sx={{
        width: '96%',
        borderBottom: '1px solid grey',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1% 2%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          columnGap: '30px',
          alignItems: 'center',
        }}
      >
        <MenuIcon
          sx={{
            border: '1px solid grey',
            padding: '3%',
            borderRadius: '7px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={toggleDrawer('left', true)}
        />
        <Typography>{children}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          columnGap: '30px',
          alignItems: 'center',
        }}
      >
        <SearchIcon
          sx={{
            border: '1px solid grey',
            padding: '3%',
            borderRadius: '7px',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        />
        <Avatar
          alt="Remy Sharp"
          src="https://th.bing.com/th/id/OIP.CsCEiIgcxJ54PXFJ-Ep5nQAAAA?pid=ImgDet&rs=1"
        />
      </Box>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </Box>
  );
};

export default Header;
