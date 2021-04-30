import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login"
import { getTokenFromResponse  } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player";
import {useDataLayerValue} from './DataLayer'

const spotify = new SpotifyWebApi();



function App() {

  const [token , setToken] = useState(null);
  const [{user}, dispatch] = useDataLayerValue();


  //run code based on a given condition 
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";

    const _token = hash.access_token;
    if( _token){
     
      setToken( _token );

       //giving token to spotify to safety talk to it 
       spotify.setAccessToken(_token);
       spotify.getMe().then((user)=> {
      
         dispatch({
           type: 'SET_USER',
           user: user,

         })
       });
    }
    
    
    spotify.getUserPlaylists().then((playlists)=>{
      dispatch({
        type: "SET_PLAYLIST",
        playlists:playlists,
      });

    });




    console.log("I HAVE A TOKEN 👉",_token);
  }, [token, dispatch]);

  //seeing if a user is present 
  console.log("user is 😀", user);



  return (
    <div className="App">
      {
        token ? (
          < Player spotify = {spotify} />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;






















