import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';

const Navbar: React.FC = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        <Box
          onMouseEnter={handleMenuOpen}
          onMouseLeave={handleMenuClose}
        >
          <Button
            color="inherit"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
          >
            Services
          </Button>
          <Menu
            id="dropdown-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              onMouseEnter: handleMenuOpen,
              onMouseLeave: handleMenuClose,
            }}
          >
            <MenuItem onClick={handleMenuClose}>Web Development</MenuItem>
            <MenuItem onClick={handleMenuClose}>Mobile Apps</MenuItem>
            <MenuItem onClick={handleMenuClose}>UI/UX Design</MenuItem>
          </Menu>
        </Box>

        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 