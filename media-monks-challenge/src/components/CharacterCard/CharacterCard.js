import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CharacterDetails } from "./CharacterDetails";


export const CharacterCard = ({character}) => {

    const handleClick = () => {
        window.location.href = `http://localhost:3000/character/${character.id}`;
    };

    return (        
        <div>
            <Card sx={{ width: 300, height: 500, margin: 2}}>
                <CardActionArea onClick={handleClick}>
                    <CardMedia
                    component="img"
                    height="300"
                    image={character.thumbnail.path + "." + character.thumbnail.extension}
                    alt="character image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {character.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {character.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}