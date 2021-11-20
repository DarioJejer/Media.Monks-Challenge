import { SET_UP_INITIAL_CHARACTERS, SET_UP_ALL_CHARACTERS} from "./mainAction.js";


const initialState = {
    characters: [],
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
      default:
        return state;
    }
  };
  