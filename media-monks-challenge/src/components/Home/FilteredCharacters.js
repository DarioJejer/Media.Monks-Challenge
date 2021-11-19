import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import axios from "axios";
import md5 from "md5";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export const FilteredCharacters = () => {
    const [charactersByName, setCharactersByName] = useState([])
    const [charactersByComic, setCharactersByComic] = useState([])
    const [charactersBySeries, setCharactersBySeries] = useState([])
    const [charactersByStories, setCharactersByStories] = useState([])

    useEffect(() => {
        try {
          const privateKey = process.env.REACT_APP_PRIVATE_KEY;
          const ts = Date.now()
          const publicKey = "a2daf13cc3b736de8f69fb81b9f1c792";
    
          axios.get("https://gateway.marvel.com/v1/public/characters?limit=3", 
            { params: { 
              apikey: publicKey,
              ts,
              hash: md5(ts+privateKey+publicKey)
            }})
          .then(res => res.data.data.results)
          .then(characters => {
              setCharactersByName(filterCharactersByName(characters));
              setCharactersByComic(filterCharactersByComic(characters));
              setCharactersBySeries(filterCharactersBySeries(characters));
              setCharactersByStories(filterCharactersByStories(characters));
          })
        } catch (error) {
            console.log(error);
        }
      }, [])  

    const useQuery = () => {
        const { search } = useLocation();  
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    const searchValue = useQuery().get("searchValue").toLowerCase();

    const filterCharactersByName = (characters) => {
        return characters.filter(character => character.name.toLowerCase().includes(searchValue))
    }
    const filterCharactersByComic = (characters) => {
        return characters.filter(character => {
            return character.comics.items.filter(comic => comic.name.toLowerCase().includes(searchValue)).length !== 0
        })
    }
    const filterCharactersBySeries = (characters) => {
        return characters.filter(character => {
            return character.series.items.filter(serie => serie.name.toLowerCase().includes(searchValue)).length !== 0
        })
    }
    const filterCharactersByStories = (characters) => {
        return characters.filter(character => {
            return character.stories.items.filter(story => story.name.toLowerCase().includes(searchValue)).length !== 0
        })
    }

    return (
        <>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Characters filter by name</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="characters-grid">
                        {charactersByName.map( (character, i) => <CharacterCard key={i} character={character} />)}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Characters filter by comic</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="characters-grid">
                        {charactersByComic.map( (character, i) => <CharacterCard key={i} character={character} />)}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Characters filter by series </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="characters-grid">
                        {charactersBySeries.map( (character, i) => <CharacterCard key={i} character={character} />)}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Characters filter by stories </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className="characters-grid">
                        {charactersByStories.map( (character, i) => <CharacterCard key={i} character={character} />)}
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
