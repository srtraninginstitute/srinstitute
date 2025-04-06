import React from 'react';
import './header.css';
import ComputerIcon from '@mui/icons-material/Computer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '2rem',
        }
      }
    }
  }
});

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between w-full">
          <div className="flex flex-col md:flex-row items-center logoBody">
          <div className="logo-container">
            <div className="hexagon-wrapper">
              <div className="hexagon">
                <div className="hex-text">SR</div>
              </div>
            </div>
            <div className="logo-text">
              <div className="text-container">
                <div className="line-1">SOFTWARE</div>
                <div className="line-2">TRAINING INSTITUTE</div>
              </div>
              <ThemeProvider theme={theme}>
                <ComputerIcon 
                  sx={{ 
                    position: 'relative',
                    right: '46px',
                    bottom: '10px',
                    color: '#2295a2',
                    zIndex: 1
                  }} 
                />
              </ThemeProvider>
            </div>
          </div>
          </div>
          <div className="flex self-center flex-col">
            <div className='flex items-center'>
          <PhoneInTalkIcon
            sx={{ 
              color: '#2295a2',
              zIndex: 1
            }} 
          />
          <p className="ml-1 m-0 font-mono text-black">+91 9030915131</p>
          </div>
          <div className='flex items-center'>
            <EmailIcon 
              sx={{ 
                color: '#2295a2',
                zIndex: 1
              }} 
            />
          <p className="ml-1 m-0 font-mono text-black">srinstitute25@gmail.com</p>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 