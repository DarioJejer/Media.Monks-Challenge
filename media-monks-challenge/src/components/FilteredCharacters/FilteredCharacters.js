import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { CharactersAccordion } from "./CharactersAccordion";
import { SearchBar } from "../Home/SearchBar";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";


export const FilteredCharacters = () => {

    const characters = useSelector(state => state.characters)

    const [charactersByName, setCharactersByName] = useState([])
    const [charactersByComic, setCharactersByComic] = useState([])
    const [charactersBySeries, setCharactersBySeries] = useState([])
    const [charactersByStories, setCharactersByStories] = useState([])

    useEffect(() => {        
        setCharactersByName(filterCharactersByName(characters));
        setCharactersByComic(filterCharactersByComic(characters));
        setCharactersBySeries(filterCharactersBySeries(characters));
        setCharactersByStories(filterCharactersByStories(characters));
    }, [characters])  

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
            <SearchBar/>
            <Box sx={{width:"88%", margin: "20px auto"}}>
                <Typography variant="h5">
                    Results for the search of '{searchValue}' :
                </Typography>
            </Box>
            <Divider sx={{ width:"50%", height:"2px", backgroundColor: "gray", margin: "0 5vw"}}/>
            <CharactersAccordion banner="Characters filter by name" characters={charactersByName}/>
            <CharactersAccordion banner="Characters filter by comic" characters={charactersByComic}/>
            <CharactersAccordion banner="Characters filter by series" characters={charactersBySeries}/>
            <CharactersAccordion banner="Characters filter by stories" characters={charactersByStories}/>
        </>
    )
}
