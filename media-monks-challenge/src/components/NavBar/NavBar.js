import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router';

export const NavBar = () => {
    const { push } = useHistory();

    const handleClick = () => {
        push("/")
    }
  
    return (
      <Box sx={{ width: "80%", margin: "0px auto"}}>
        <AppBar position="sticky" sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "15px"} }>
          <Toolbar>
            <IconButton size="large" aria-label="home icon" color="inherit" onClick={handleClick}>
                <HomeIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="large" aria-label="favorites icon" color="inherit">
                <BookmarksIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
}