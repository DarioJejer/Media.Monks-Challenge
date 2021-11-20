import { SET_UP_INITIAL_CHARACTERS, SET_UP_ALL_CHARACTERS, SET_DISPLAYED_CHARACTERS, SET_FAVORITES_CHARACTERS} from "./mainAction.js";


const initialState = {
    characters: [],
    displayedCharacters: [],
    favorites: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_UP_INITIAL_CHARACTERS:
        return {
          ...state,
          characters: action.payload.characters
        }
      case SET_UP_ALL_CHARACTERS:
        return {
          ...state,
          characters: action.payload
        }      
      case SET_DISPLAYED_CHARACTERS:
        return{
          ...state,
          displayedCharacters: action.payload
        }
      case SET_FAVORITES_CHARACTERS:
        return{
          ...state,
          favorites: action.payload
        }
      default:
        return state;
    }
  };
  