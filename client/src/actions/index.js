import axios from "axios";


//DISPATCH, EXPORTA SOLO LAS ACCIONES AL REDUCER SIN TENER QUE IMPORTARLAS
export function getVideogames (){
    
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/Videogames");
     return dispatch({
        type: "GET_VIDEOGAMES",
        payload: json.data
    })
}
}

export function getNameGames(name){
  try{
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/Videogames?name=" + name);
     return dispatch({
        type: "GET_NAME_GAMES",
        payload: json.data
    })
}
 }catch(error){
    console.log(error)
 }
}

export function getGenres (){
    return async function(dispatch){
        var json = await axios.get("http://localhost:3001/Genres");
     return dispatch({
        type: "GET_GENRES",
        payload: json.data
    })
}
}

export function postVidegames (payload){
    return async function(dispatch){
        var json = await axios.post("http://localhost:3001/Videogame", payload);
     return json;
}
}

export function filterGamesByGenre(payload){
     return ({
        type: "FILTER_BY_GENRE",
        payload : payload
    })
}
export function filterM(){
    return({
        type:"FILTER_M"
    })
}

export function filterGamesByCreated(payload){
    return({
        type: "FILTER_CREATED",
        payload
    })
}
export function filterAsc(payload){
    return({
        type: "FILTER_ASC",
        payload
    })
}

export function filterRank(payload){
    return({
        type: "FILTER_RANK",
        payload
    })
}

export function getGamesById(id){
    try{
      return async function(dispatch){
          var json = await axios.get("http://localhost:3001/Videogames/" + id);
       return dispatch({
          type: "GET_GAME_ID",
          payload: json.data
      })
  }
   }catch(error){
      console.log(error)
   }
  }
  export function Clear(){
    return({
        type: "CLEAR",
    })
}
