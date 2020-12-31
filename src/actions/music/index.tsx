import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { FETCHED_SONGS, IS_NOT_PLAYING, IS_PLAYING, RESET_CURRENT_SONG, SET_CURRENT_SONG } from "../../constants/actions";
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