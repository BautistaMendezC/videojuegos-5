const inicialState = {     
    videogames:[],
    allVideogames: [],
    genres: [],
    detail: {},
 };

 // EL REDUCER SON LOS ESTADOS QUE VOY A IR TENIENDO
// SWITCH PARECIDO A UN IF
function rootReducer(state = inicialState, action){
    switch(action.type) {
        case "GET_VIDEOGAMES":
            return{
                ...state,
                videogames: action.payload,
                allVideogames: action.payload
            }
        case "GET_NAME_GAMES":
            return{
                ...state,
                videogames: action.payload
            }
        case "GET_GAME_ID":
            return{
                ...state,
                detail : action.payload,
            }
            case "CLEAR":
                return{
                    ...state,
                    detail : {},
                }
        case "GET_GENRES":
            return{
                ...state,
                genres: action.payload,
            } 
        case "FILTER_M":
            const allVideogames1 = state.allVideogames
            const RatingAlto = allVideogames1.filter(e=>e.rating > 4)
            return{
                ...state,
                videogames:  RatingAlto
            }

        case "POST_VIDEOGAME":
            return{
                ...state,
            } 

        case "FILTER_BY_GENRE":

            const allGenres = state.allVideogames  
            const genreFilter = allGenres.filter(e => e.genres.includes(action.payload + " / "))
            console.log(genreFilter)
            return{

            ...state,
                videogames: genreFilter
            }
            case "FILTER_CREATED":

                const allcreated = state.allVideogames  
                const createdFilter = action.payload === "creadoDB"? allcreated.filter(el => el.createdInDb) : allcreated.filter(el => !el.createdInDb) 
                return{
    
                ...state,
                    videogames: action.payload === "todos"? allcreated : createdFilter
                }
            case "FILTER_ASC":

                let sortedArr1 = action.payload === 'asc' ?
                state.allVideogames.sort(function (a, b) {
                    if (a.name < b.name) return -1
                    if (a.name > b.name) return 1;
                    return 0;
                }) :
                state.allVideogames.sort(function (a, b) {
                    if (a.name > b.name) return -1
                    if (a.name < b.name) return 1;
                    return 0;
                })
            return {
                ...state,
                videogames: sortedArr1
            }
            case "FILTER_RANK":

                let sortedArr2 = action.payload === 'Rank' ?
                state.allVideogames.sort(function (a, b) {
                    if (a.rating < b.rating) return -1;
                    if (a.rating > b.rating) return 1;
                    return 0;
                }) :
                state.allVideogames.sort(function (a, b) {
                    if (a.rating > b.rating) return -1;
                    if (a.rating < b.rating) return 1;
                    return 0;
                })
            return {
                ...state,
                videogames: sortedArr2
            }



            default: return {
                state
            }
    }
}
export default rootReducer;