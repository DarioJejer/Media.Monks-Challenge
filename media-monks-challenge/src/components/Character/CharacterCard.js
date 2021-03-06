import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton, } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";
import { Box } from "@mui/system";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux';
import { setFavoritesCharacters } from '../../redux/mainAction';

const useStyles = makeStyles({
    card: {
        transition: "all .3s linear",
        '&:hover': {
            transform: "scale(1.05) rotate(0.5deg)",
            boxShadow: "0px 0px 15px 12px rgba(0,0,0,0.32)"
        }
   }
})

export const CharacterCard = ({character}) => {

    const favorites = useSelector(state => state.favorites)
    const dispatch = useDispatch();

    const { push } = useHistory();

    const handleDetails = () => {
        push(`/character/${character.id}`)
    };

    const handleFavoriteAdd = (newFavorite) => {
        favorites[newFavorite] = true;
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
            );
        dispatch(setFavoritesCharacters(favorites))
    };
    const handleFavoriteDelete = (removeFavorite) => {
        delete favorites[removeFavorite]
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
            );
        dispatch(setFavoritesCharacters(favorites))
    };

    const classes = useStyles()      

    return (        
        <div>
            <Card className={classes.card} sx={{ width: 300, height: 530, margin: 2, backgroundColor: "white", borderRadius: "15px", boxShadow: "0px 0px 10px 8px rgba(0,0,0,0.32)"}}>
                <CardActionArea onClick={handleDetails}>
                    <CardMedia
                    component="img"
                    height="300"
                    image={character.thumbnail.path + "." + character.thumbnail.extension}
                    alt="character image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <Box 
                                overflow="hidden"            
                                height={30}
                            >
                                {character.name}
                            </Box>
                        </Typography>
                        <Typography noWrap variant="body2" color="text.secondary">
                            <Box
                                fontSize="h5.fontSize"
                                component="div" 
                                overflow="hidden"            
                                whiteSpace="pre-line"
                                textOverflow="ellipsis"
                                height={120}
                            >
                            {character.description}
                            </Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box marginTop="-20px">
                        {Object.hasOwn(favorites, character.id) ? (
                            <IconButton aria-label="add to favorites" onClick={() => handleFavoriteDelete(character.id)}>
                                <BookmarkIcon />
                            </IconButton>
                        ) : (
                            <IconButton aria-label="add to favorites" onClick={() => handleFavoriteAdd(character.id)}>
                                <BookmarkBorderIcon />
                            </IconButton>
                        )}
                    </Box>
                </CardActions>
            </Card>
        </div>
    )
}