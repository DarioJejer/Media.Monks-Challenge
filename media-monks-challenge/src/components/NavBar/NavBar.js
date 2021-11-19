import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HomeIcon from '@mui/icons-material/Home';

export const NavBar = () => {

    const handleClick = () => {
      window.location.href = `http://localhost:3000`;
    }
  
    return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={handleClick}>
                <HomeIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <BookmarksIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
}