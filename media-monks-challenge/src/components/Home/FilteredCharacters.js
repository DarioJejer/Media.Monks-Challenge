import axios from "axios";
import md5 from "md5";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { CharactersAccordion } from "./CharactersAccordion";


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
            <CharactersAccordion banner="Characters filter by name" characters={charactersByName}/>
            <CharactersAccordion banner="Characters filter by comic" characters={charactersByComic}/>
            <CharactersAccordion banner="Characters filter by series" characters={charactersBySeries}/>
            <CharactersAccordion banner="Characters filter by stories" characters={charactersByStories}/>
        </>
    )
}
