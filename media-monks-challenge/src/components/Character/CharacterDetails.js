import { CardMedia, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from "react";
import { useSelector } from 'react-redux';

export const CharacterDetails = ({id}) => {
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true)
    const characters = useSelector(state => state.characters)

    React.useEffect(() => {
      setCharacter(characters.find(c => c.id ===  parseInt(id)));
      setLoading(false);
      }, [characters])    

    return (        
        <Box sx={{width:"80%", margin:"40px auto", backgroundColor:"rgba(31,38,51,1)", border: "solid 2px black", borderRadius: "15px", boxShadow: "0px 0px 15px 3px rgba(0,0,0,0.32)"}}>
            {loading ? (
                <div></div>
            ):(
                <>
                    {character ? (
                        <Box sx={{ width: "80%", margin: "0px auto", padding: "30px"} }>
                            <Box sx={{ justifyItems: 'center', marginY: "40px"} }>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={character.thumbnail.path + "." + character.thumbnail.extension}
                                    alt="Movie Poster"
                                    sx={{objectFit: "contain"}}
                                />
                            </Box>
                            <Typography id="movie-title" variant="h6" component="h2">
                                {character.name}
                            </Typography>
                            <Divider sx={{ margin: 3}}/>
                            <Typography id="movie-plot">
                                {character.description}
                            </Typography>
                            <Divider sx={{ margin: 3}}/>
                            <Box>
                                <Typography>List of series it appears:</Typography>
                                <ul>
                                    {character.series.items.map(series => <li>{series.name}</li>)}
                                </ul>
                            </Box>
                            <Divider sx={{ margin: 3}}/>
                            <Box>
                                <Typography>List of stories it appears:</Typography>
                                <ul>
                                    {character.stories.items.map(story => <li>{story.name}</li>)}
                                </ul>
                            </Box>
                            <Divider sx={{ margin: 3}}/>
                            <Box>
                                <Typography>List of comics it appears:</Typography>
                                <ul>
                                    {character.comics.items.map(comic => <li>{comic.name}</li>)}
                                </ul>
                            </Box>
                        </Box>
                    ) : (
                        <div>Not found</div>
                    )}
                </>
            )}
        </Box>
      )
}