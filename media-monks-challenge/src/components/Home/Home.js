import "./Home.css";
import React, { useEffect, useState } from "react";
import { CharacterCard } from "../Character/CharacterCard";
import { SearchBar } from "./SearchBar";
import { useSelector } from "react-redux";
import { Button, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import { setDisplayedCharacters } from '../../redux/mainAction';
import { useDispatch } from 'react-redux';

export const Home = () => {  
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  const characters = useSelector(state => state.characters)
  const displayedCharacters = useSelector(state => state.displayedCharacters)
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(setDisplayedCharacters(characters.slice(0,100)))
      if(characters.length > 0){
        setLoading(false);
      }
    }, [characters])

  const handleClick = () => {
    dispatch(setDisplayedCharacters([...displayedCharacters, ...characters.slice(page*100,(page+1)*100)]))
    setPage(page+1);
  }

  const skeletons = [...Array(20).keys()];

  return (
    <>  
      <SearchBar/>
      {loading ? (
        <div className="characters-grid">
          {skeletons.map( c => {
            return (
              <Box sx={{marginY:"30px"}}>
                <Skeleton variant="rectangular" width={300} height={300} />
                <Skeleton width="60%" height={50} />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton variant="circular" width={40} height={40}/>
              </Box>
            )
          })}
        </div>
      ) : (
        <>
          <div className="characters-grid">
            {displayedCharacters.map( (character, i) => <CharacterCard key={i} character={character} />)}
          </div>
          {characters.length > 100 ? (
            <Box sx={{ justifyContent: 'center', display: "flex",  p: 2 }}>
              <Button variant="contained" onClick={handleClick}>Load mode characters</Button>
            </Box>
          ) : (<></>)}
        </>
      )}
    </>
  );
};