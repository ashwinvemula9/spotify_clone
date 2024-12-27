//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/



export const authEndpoint = "https://accounts.spotify.com/authorize"

const redirectURI = "https://ashwinvemula9.github.io/spotify_clone/";

const clientId = "42a2d5e0301b49f28d101003e21a990c";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];


export const getToken = () => {
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        // debugger
        return initial;
    },{});
}



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`



