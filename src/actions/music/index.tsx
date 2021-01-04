import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { FETCHED_SONGS, HIDE_PLAYER_MODAL, IS_NOT_PLAYING, IS_NOT_SHUFFLING, IS_PLAYING, IS_SHUFFLING, REPEAT_ALL, REPEAT_NONE, REPEAT_ONE, RESET_CURRENT_SONG, SET_CURRENT_SONG, SHOW_PLAYER_MODAL } from "../../constants/actions";
import { fetchSongsFromLocalStorage, defaultSongOptions } from "../../controllers/music/getSongs";
import { I_SongSchema } from '../../controllers/music/interfaces';

export const fetchSongs = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let songs: I_SongSchema[] = await fetchSongsFromLocalStorage(defaultSongOptions);
        dispatch({ type: FETCHED_SONGS, payload: songs })
    }
}

export const setCurrentSong = (song: I_SongSchema | undefined): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: SET_CURRENT_SONG, payload: song });
    }
}

export const resetCurrentSong = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: RESET_CURRENT_SONG, payload: null });
    }
}

export const setSongPlayingStatus = (song: I_SongSchema | undefined | null, status: boolean): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: status ? IS_PLAYING : IS_NOT_PLAYING })
    }
}

export const togglePlayerModal = (show: boolean): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: show ? SHOW_PLAYER_MODAL : HIDE_PLAYER_MODAL })
    }
}

export const toggleShuffle = (shuffle: boolean): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: shuffle ? IS_SHUFFLING : IS_NOT_SHUFFLING })
    }
}

export const toggleRepeat = (mode: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: mode === "none" ? REPEAT_ALL : mode === "all" ? REPEAT_ONE : REPEAT_NONE })
    }
}