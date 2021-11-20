
import React, { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    margin: '30px auto',
    width: '300px',
    [theme.breakpoints.up('sm')]: {
      margin: "auto 20",
      width: '400px',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '200px',
        [theme.breakpoints.up('md')]: {
        width: '300px',
        },
    },
  }));
  
export const SearchBar = () => {

    const [searchValue, setSearchValue] = useState("")
    const { push } = useHistory();
      
    const onSubmit = (e)=>{
        e.preventDefault();
        push(`/search?searchValue=${searchValue}`)
    }
    const handleChange = (e)=>{
        setSearchValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Name, comic, story or series"
                value={searchValue}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
        </form>
    )
  }

