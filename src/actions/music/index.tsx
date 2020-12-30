import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { fetchSongsFromLocalStorage, defaultSongOptions } from "../../controllers/music/getSongs";
import { ISongSchema } from '../../controllers/music/interfaces';
import { isNullUndefined } from "../../util/util";

export const FETCHED_SONGS: string = "FETCHED_SONGS";
export const SET_CURRENT_SONG: string = "SET_CURRENT_SONG";
export const RESET_CURRENT_SONG: string = "RESET_CURRENT_SONG";

export const fetchSongs = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let songs: ISongSchema[] = await fetchSongsFromLocalStorage(defaultSongOptions);
        dispatch({ type: FETCHED_SONGS, payload: songs })
    }
}

export const setCurrentSong = (song: ISongSchema | undefined): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: SET_CURRENT_SONG, payload: song });
    }
}

export const resetCurrentSong = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: RESET_CURRENT_SONG, payload: null });
    }
}