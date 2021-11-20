import { CardMedia, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useSelector } from 'react-redux';


export const CharacterDetails = ({id}) => {
    const [character, setCharacter] = React.useState();
    const characters = useSelector(state => state.characters)

    React.useEffect(() => {
      setCharacter(characters.find(c => c.id ===  parseInt(id)))
      }, [])    

    return (        
        <>
            {character ? (
                <>
                    <Box sx={{ justifyItems: 'center'} }>
                        <CardMedia
                            component="img"
                            height="300"
                            image={character.thumbnail.path + "." + character.thumbnail.extension}
                            alt="Movie Poster"
                            sx={{objectFit: "contain"}}
                        />
                    <Divider/>
                    </Box>
                    <Typography id="movie-title" variant="h6" component="h2">
                        {character.name}
                    </Typography>
                    <Typography id="movie-plot" sx={{ mt: 2}}>
                        {character.description}
                    </Typography>
                </>
            ) : (
                <div>Cargando</div>
            )}
        </>
      )
}