export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQCBDVanBstrGOd1s4qH7Zl65Z_YpYO161nkAH80SXdbebhfVCoF6_-4UJWPRauVwvyAwmn7r5Oy1SJIC1pHeI10rHUNA1pPMHXNmfcHFP38xncMEOtGjWGL9QSsKKp9b76RQOOq4Kc_ogOnGUzWYFeM5LcCkwo-C2Ele9c2thXX3YUD",
    playlist: null,
    develop_purpose: null,
    top_artists: null,

}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
        case 'SET_DEVELOP_PUR':
            return {
                ...state,
                develop_purpose: action.develop_purpose
            }
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state;
    }
}



export default reducer