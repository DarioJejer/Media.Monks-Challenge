import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { setDisplayedCharacters } from '../../redux/mainAction';
import { useDispatch } from 'react-redux';

export const NavBar = () => {
    const { push } = useHistory();
    const characters = useSelector(state => state.characters)
    const dispatch = useDispatch();

    const handleHome = () => {
        dispatch(setDisplayedCharacters(characters.slice(0,100)))
        push("/")
    }
    const handleFavorite = () => {
      var favorites = JSON.parse(localStorage.getItem("favorites"));
      var favCharacters = Object.keys(favorites).map(id => characters.find(c => c.id == id));
      dispatch(setDisplayedCharacters(favCharacters))
    }

  
    return (
      <Box sx={{ width: "80%", margin: "0px auto"}}>
        <AppBar position="sticky" sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "15px"} }>
          <Toolbar>
            <IconButton size="large" aria-label="home icon" color="inherit" onClick={handleHome}>
                <HomeIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="large" aria-label="favorites icon" color="inherit" onClick={handleFavorite}>
                <BookmarksIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
}