export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQCBDVanBstrGOd1s4qH7Zl65Z_YpYO161nkAH80SXdbebhfVCoF6_-4UJWPRauVwvyAwmn7r5Oy1SJIC1pHeI10rHUNA1pPMHXNmfcHFP38xncMEOtGjWGL9QSsKKp9b76RQOOq4Kc_ogOnGUzWYFeM5LcCkwo-C2Ele9c2thXX3YUD",
    playlist: null,
    develop_purpose : null

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
            return{
                ...state,
                develop_purpose : action.develop_purpose
            }
        default:
            return state;
    }
}

export default reducer