import "./Home.css";
import React, { useEffect, useState } from "react";
import { CharacterCard } from "../Character/CharacterCard";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

export const Home = () => {
  
  const [displayedCharacters, setDisplayedCharacters] = useState([])
  const [page, setPage] = useState(1)
  const characters = useSelector(state => state.characters)

  useEffect(() => {
    setDisplayedCharacters(characters.slice(0,100))
  }, [characters])

  const handleClick = () => {
    setDisplayedCharacters([...displayedCharacters, ...characters.slice(page*100,(page+1)*100)])
    setPage(page+1);
  }

  return (
    <>  
      <SearchBar/>
      <div className="characters-grid">
        {displayedCharacters.map( (character, i) => <CharacterCard key={i} character={character} />)}
      </div>
      <Box sx={{ justifyContent: 'center', display: "flex",  p: 2 }}>
        <Button variant="contained" onClick={handleClick}>Load mode characters</Button>
      </Box>
    </>
  );
};