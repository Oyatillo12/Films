import { useCallback } from "react"
import { ACTION } from "./actions"

const initialState = {
    popular:[],
    upComing: [],
    nowPlaying: [],
    topRated: [],
    search: [],
    liked: [],
    saved: [],
}

export const reducer = (state = initialState, action) => {
    if (action.type == ACTION.playing) {
        return {...state, nowPlaying:  JSON.parse(localStorage.getItem('nowPlaying')) || action.payload }
    }
    else if (action.type == ACTION.popular) {
        return {...state, popular:action.payload}
    }
    else if (action.type == ACTION.rated) {
        return {...state, topRated:action.payload}
    }
    else if (action.type == ACTION.coming) {
        return {...state, upComing:action.payload}
    }
    else if (action.type == ACTION.nowPlaying_like) {
        const LikedMovies = state.nowPlaying.map(item => item.id == action.payload ? { ...item, isLiked: !item.isLiked } : item)
        localStorage.setItem('nowPlaying', JSON.stringify(LikedMovies.length && LikedMovies))
        return {
            liked: LikedMovies.filter(item => item.isLiked),
            nowPlaying: LikedMovies,
            popular: LikedMovies,
            rated: LikedMovies,
            saved: state.saved,
            upComing:LikedMovies,
        }
    }
    else {
        return state
    }

}