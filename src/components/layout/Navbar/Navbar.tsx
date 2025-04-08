import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Container,
  // useTheme,
  // useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [servicesAnchor, setServicesAnchor] = useState<null | HTMLElement>(null);
  const [trainingAnchor, setTrainingAnchor] = useState<null | HTMLElement>(null);
  const [projectsAnchor, setProjectsAnchor] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => 
    (event: React.MouseEvent<HTMLElement>) => {
      // Close all menus first
      setServicesAnchor(null);
      setTrainingAnchor(null);
      setProjectsAnchor(null);
      // Open the new menu
      setAnchor(event.currentTarget);
    };

  const handleMenuClose = (setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => () => {
    setAnchor(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const menuItems = [
    { name: 'Services', anchor: servicesAnchor, setAnchor: setServicesAnchor, items: [
      'Internship Programs',
      'Placement Assistance',
      'Placements'
    ]},
    { name: 'Software Training', anchor: trainingAnchor, setAnchor: setTrainingAnchor, items: [
      'Classroom Training',
      'Online Training',
      'Weekend Training',
      'Corporate Training',
      'Internships',
      'Trainers Profile',
      'Course Schedule'
    ]},
    { name: 'Projects', anchor: projectsAnchor, setAnchor: setProjectsAnchor, items: [
      'Live Projects',
      'IEEE Projects',
      'Realtime Projects',
      'Internships'
    ]}
  ];

  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        background: 'linear-gradient(45deg, #6B46C1 30%, #D53F8C 90%)',
        boxShadow: '0 3px 5px 2px rgba(107, 70, 193, .3)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'white',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Home
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button 
              color="inherit"
              sx={{
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              All Courses
            </Button>
            
            {menuItems.map(({ name, anchor, setAnchor, items }) => (
              <Box
                key={name}
                onMouseEnter={handleMenuOpen(setAnchor)}
                onMouseLeave={handleMenuClose(setAnchor)}
              >
                <Button 
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {name}
                </Button>
                <Menu
                  anchorEl={anchor}
                  open={Boolean(anchor)}
                  onClose={handleMenuClose(setAnchor)}
                  MenuListProps={{
                    onMouseEnter: () => setAnchor(anchor),
                    onMouseLeave: handleMenuClose(setAnchor),
                  }}
                  transitionDuration={0}
                  disableAutoFocusItem
                  sx={{
                    '& .MuiPaper-root': {
                      backgroundColor: 'white',
                      boxShadow: '0 4px 20px rgba(107, 70, 193, 0.1)',
                      borderRadius: '8px',
                      marginTop: '8px',
                    },
                  }}
                >
                  {items.map((item) => (
                    <MenuItem 
                      key={item}
                      onClick={handleMenuClose(setAnchor)}
                      sx={{
                        padding: '8px 24px',
                        '&:hover': {
                          backgroundColor: 'rgba(107, 70, 193, 0.1)',
                        },
                      }}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ))}

            <Button 
              color="inherit"
              sx={{
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Blog
            </Button>
            <Button 
              color="inherit"
              sx={{
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Contact
            </Button>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: 'white',
                  boxShadow: '0 4px 20px rgba(107, 70, 193, 0.1)',
                  borderRadius: '8px',
                },
              }}
            >
              <MenuItem 
                onClick={handleMobileMenuClose}
                sx={{
                  padding: '8px 24px',
                  '&:hover': {
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                  },
                }}
              >
                Home
              </MenuItem>
              <MenuItem 
                onClick={handleMobileMenuClose}
                sx={{
                  padding: '8px 24px',
                  '&:hover': {
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                  },
                }}
              >
                All Courses
              </MenuItem>
              {menuItems.map(({ name }) => (
                <MenuItem 
                  key={name} 
                  onClick={handleMobileMenuClose}
                  sx={{
                    padding: '8px 24px',
                    '&:hover': {
                      backgroundColor: 'rgba(107, 70, 193, 0.1)',
                    },
                  }}
                >
                  {name}
                </MenuItem>
              ))}
              <MenuItem 
                onClick={handleMobileMenuClose}
                sx={{
                  padding: '8px 24px',
                  '&:hover': {
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                  },
                }}
              >
                Blog
              </MenuItem>
              <MenuItem 
                onClick={handleMobileMenuClose}
                sx={{
                  padding: '8px 24px',
                  '&:hover': {
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                  },
                }}
              >
                Contact
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 