import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import { useHistory } from "react-router";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from "@mui/system";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const CharacterCard = ({character}) => {
    const { push } = useHistory();

    const handleDetails = () => {
        push(`/character/${character.id}`)
    };
    const handleFavorite = () => {
        push(`/character/${character.id}`)
    };

    return (        
        <div>
            <Card sx={{ width: 300, height: 530, margin: 2}}>
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
                        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
                            <BookmarkBorderIcon />
                        </IconButton>
                    </Box>
                </CardActions>
            </Card>
        </div>
    )
}