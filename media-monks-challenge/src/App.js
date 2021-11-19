import { Route } from 'react-router';
import './App.css';
import { CharacterDetails } from './components/CharacterCard/CharacterDetails';
import { FilteredCharacters } from './components/Home/FilteredCharacters';
import { Home } from './components/Home/Home';
import { NavBar } from './components/NavBar/NavBar';


function App() {
  
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
