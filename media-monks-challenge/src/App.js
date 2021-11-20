import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';
import './App.css';
import { CharacterDetails } from './components/Character/CharacterDetails';
import { FilteredCharacters } from './components/FilteredCharacters/FilteredCharacters';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';
import { setUpAllCharacters, setUpInitialCharacters } from './redux/mainAction';


function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setUpInitialCharacters());
    dispatch(setUpAllCharacters());
  }, [])  
  
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/character/:id" render={({match}) => <CharacterDetails  id={match.params.id}/>}/>
      <Route path="/search" component={FilteredCharacters}/>
    </div>
  )
}

export default App;
