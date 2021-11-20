import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import { CharacterCard } from "../Character/CharacterCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from "@mui/system";


export const CharactersAccordion = ({banner, characters}) => {
    return (
        <Box sx={{width: "90%", margin: "20px auto"}}>
            <Accordion rounded sx={{backgroundColor:"rgb(30 30 30)", color: "white"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="expand character list"
                >
                    <Typography>{banner}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="characters-grid">
                        {characters.map( (character, i) => <CharacterCard key={i} character={character} />)}
                    </div>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}
