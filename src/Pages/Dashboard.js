import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from '../Components/Header/Header';
import Image from '../images/Icon/3786819.jpg';

const Dashboard = ({ setTheme, theme }) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
        height: '100vh',
      }}
    >
      <Header setTheme={setTheme} theme={theme}>
        Dashboard
      </Header>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgb(99,196,203)',
          color: 'black',
          padding: '1% 2%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
          }}
        >
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '30px', color: 'white' }}
          >
            Working Smarter
          </Typography>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '20px', color: 'white' }}
          >
            Schedule Your Call, Conference, Meeting or Start a new chats with a
            welcome message
          </Typography>
        </Box>
        <img
          src={Image}
          alt={'Image'}
          style={{
            width: '40%',
            height: '50vh',
          }}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
