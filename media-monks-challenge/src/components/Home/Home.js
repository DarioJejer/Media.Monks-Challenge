import "./Home.css";
import React from "react";
import { CharacterCard } from "../Character/CharacterCard";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";

export const Home = () => {
  
  const characters = useSelector(state => state.characters)

  return (
    <>  
      <SearchBar/>
      <div className="characters-grid">
        {characters.map( (character, i) => <CharacterCard key={i} character={character} />)}
      </div>
    </>
  );
};