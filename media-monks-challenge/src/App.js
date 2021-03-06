import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import './App.css';
import { CharacterDetails } from './components/Character/CharacterDetails';
import { FilteredCharacters } from './components/FilteredCharacters/FilteredCharacters';
import { Home } from './components/Home/Home';
import { ScrollUp } from './components/Home/ScrollUp';
import { NavBar } from './components/NavBar/NavBar';
import { setUpAllCharacters, setUpInitialCharacters, setFavoritesCharacters } from './redux/mainAction';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setUpInitialCharacters());
    dispatch(setUpAllCharacters());
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites) {
      localStorage.setItem(
        "favorites",
        JSON.stringify({})
        );
    }
    else{
      dispatch(setFavoritesCharacters(favorites));
    }
  }, [dispatch])  
  
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/character/:id" render={({match}) => <CharacterDetails  id={match.params.id}/>}/>
      <Route path="/search" component={FilteredCharacters}/>
      <ScrollUp/>
    </div>
  )
}

export default App;
