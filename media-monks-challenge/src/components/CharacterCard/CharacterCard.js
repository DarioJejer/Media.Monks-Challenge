import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const CharacterCard = ({character}) => {
    return (        
        <div>
            <Card sx={{ width: 300, height: 500, margin: 2}}>
                <CardActionArea>
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