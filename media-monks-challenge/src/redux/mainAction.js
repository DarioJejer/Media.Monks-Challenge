import axios from "axios";
import md5 from "md5";

export const SET_UP_INITIAL_CHARACTERS = "SET_UP_INITIAL_CHARACTERS";
export const SET_UP_ALL_CHARACTERS = "SET_UP_ALL_CHARACTERS";

export function setUpInitialCharacters() {
  return function(dispatch) {
    console.log("action initial");
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const ts = Date.now()
    const publicKey = "a2daf13cc3b736de8f69fb81b9f1c792";
    return axios.get("https://gateway.marvel.com/v1/public/characters", 
    { params: {
        apikey: publicKey,
        ts,
        hash: md5(ts+privateKey+publicKey),
        limit: 100,
      }})
    .then(res => {
      var payload = {
          charactersTotal: res.data.data.total,
          characters: res.data.data.results
      }          
      dispatch({type: SET_UP_INITIAL_CHARACTERS, payload})
    })
  };
}

export function setUpAllCharacters() {
  return function(dispatch) {
    console.log("action all 1");
    async function fetchData(){
      console.log("action all 2");
      const privateKey = process.env.REACT_APP_PRIVATE_KEY;
      const ts = Date.now()
      const publicKey = "a2daf13cc3b736de8f69fb81b9f1c792";
      var count = 0
      var loadedCharacters = []
      console.log("total", 1550);
      while (count*100 < 1550) {
        await axios.get("https://gateway.marvel.com/v1/public/characters", 
          { params: {
            apikey: publicKey,
            ts,
            hash: md5(ts+privateKey+publicKey),
            limit: 100,
            offset: count*100
          }})
        .then(res => {
        console.log("count", loadedCharacters);
          count++;
          loadedCharacters.push(...res.data.data.results);
        });        
      }    
      console.log("loaded", loadedCharacters);
      return dispatch({type: SET_UP_ALL_CHARACTERS, payload: loadedCharacters});
    }
    fetchData();
  };
}