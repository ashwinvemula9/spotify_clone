import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './login';
import { getToken } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {


  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const _token = getToken().access_token;
    window.location.hash = "";

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getUserPlaylists().then(playlist => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlist
        })
      })

      spotify.getPlaylist('7aVigxaJjYd6x2ZIgtVKno').then(res => {
        dispatch({
          type: 'SET_DEVELOP_PUR',
          develop_purpose: res
        })
      })

    }
  }, [token, dispatch])

  console.log(token, user);

  return (
    <div className="App">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
      {console.log(user, token)}
    </div>
  );
}

export default App;
