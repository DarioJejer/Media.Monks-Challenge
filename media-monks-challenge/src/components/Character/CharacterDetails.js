import { CardMedia, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import md5 from 'md5';
import * as React from 'react';


export const CharacterDetails = ({id}) => {
    const [character, setCharacter] = React.useState();

    React.useEffect(() => {
        try {
          const privateKey = process.env.REACT_APP_PRIVATE_KEY;
          const ts = Date.now()
          const publicKey = "a2daf13cc3b736de8f69fb81b9f1c792";
    
          axios.get(`https://gateway.marvel.com/v1/public/characters/${id}`, 
            { params: { 
              apikey: publicKey,
              ts,
              hash: md5(ts+privateKey+publicKey)
            }})
          .then(res => {
            console.log(res.data);
            console.log(res.data.data);
            setCharacter(res.data.data.results[0]);
          });
        } catch (error) {
            console.log(error);
        }
      }, [id])    

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