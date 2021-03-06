export const initialState ={
    user:null,
    playlists: [],
    playing: false,
    item :null,
    //token:null,
}

const reducer = (state, action ) =>{
    //debugging tool
    console.log(action);

    // when we push data into datalayer we dispatch an action 
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
         case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        case "SET_TOKEN":
            return{
                ...state,
                playlists:action.playlists,

            }

        default:
            return state;
    }

}

export default reducer;