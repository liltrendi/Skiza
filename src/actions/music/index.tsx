import { RootStateOrAny } from "react-redux";
import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { FETCHED_SONGS, HIDE_PLAYER_MODAL, IS_NOT_PLAYING, IS_NOT_SHUFFLING, IS_PLAYING, IS_SHUFFLING, REPEAT_ALL, REPEAT_NONE, REPEAT_ONE, RESET_CURRENT_SONG, SET_CURRENT_SONG, SET_SONG_QUEUE, SHOW_PLAYER_MODAL } from "../../constants/actions";
import { fetchSongsFromLocalStorage, defaultSongOptions } from "../../controllers/music/getSongs";
import { I_SongSchema } from '../../controllers/music/interfaces';
import { I_SongStateInitialProps } from "../../reducers/player/songState";
import { getSongQueue } from "../../util/songs";

interface I_GlobalStateProps {
    songs: I_SongSchema[];
    songState: I_SongStateInitialProps;
}

export const fetchSongs = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let songs: I_SongSchema[] = await fetchSongsFromLocalStorage(defaultSongOptions);
        dispatch({ type: FETCHED_SONGS, payload: songs })
    }
}

export const setSongQueue = (song: I_SongSchema | undefined, songs: I_SongSchema[], shuffle: boolean): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: SET_SONG_QUEUE, payload: getSongQueue(song ? song.id : "", songs, shuffle) });
    }
}

export const setCurrentSong = (song: I_SongSchema | undefined, state: RootStateOrAny): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    let {songs, songState}: I_GlobalStateProps = state;
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        dispatch({ type: SET_CURRENT_SONG, payload: song });
        dispatch({ type: SET_SONG_QUEUE, payload: getSongQueue(song ? song.id : "", songs, songState.shuffling) });
    }
}

export const resetCurrentSong = (state: RootStateOrAny): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
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