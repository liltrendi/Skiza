import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { fetchSongsFromLocalStorage, defaultSongOptions } from "../../controllers/music/getSongs";
import { ISongsSchema } from '../../controllers/music/interfaces';

export const FETCHED_SONGS: string = "FETCHED_SONGS";

export const fetchSongs = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let songs: ISongsSchema[] = await fetchSongsFromLocalStorage(defaultSongOptions);
        // console.log("Songs", songs)
        dispatch({ type: FETCHED_SONGS, payload: songs })
    }
}