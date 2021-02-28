import { RootStateOrAny } from "react-redux";
import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { ADD_SONG_TO_PLAYLIST, CREATE_PLAYLIST, FETCHED_SONGS, HIDE_PLAYER_MODAL, IS_NOT_PLAYING, IS_NOT_SHUFFLING, IS_PLAYING, IS_SHUFFLING, RENAME_PLAYLIST, REPEAT_ALL, REPEAT_NONE, REPEAT_ONE, RESET_CURRENT_SONG, SET_CURRENT_SONG, SET_SONG_QUEUE, SHOW_PLAYER_MODAL } from "../../constants/actions";
import { fetchSongsFromLocalStorage, defaultSongOptions } from "../../controllers/music/getSongs";
import { I_Playlist, I_SongSchema } from '../../controllers/music/interfaces';
import { getCurrentPlaylists } from "../../controllers/music/playlists";
import { I_SongStateInitialProps } from "../../reducers/player/songState";
import { getSongQueue } from "../../util/songs";

const uuid = require('react-native-uuid');

interface I_GlobalStateProps {
    songs: I_SongSchema[];
    songState: I_SongStateInitialProps;
    playlists: I_Playlist[];
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

export const createPlaylist = (state: RootStateOrAny, playlistName: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    let newPlaylist: I_Playlist = {name: playlistName, id: uuid.v4(), songs: []};
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let currentPlaylists: I_Playlist[] = await getCurrentPlaylists(state);
        dispatch({ type: CREATE_PLAYLIST, payload: [...currentPlaylists, newPlaylist] });
    }
}

export const addSongToPlaylist = (state: RootStateOrAny, playlistId: string, songId: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let currentPlaylists: I_Playlist[] = await getCurrentPlaylists(state);

        let newPlaylist: I_Playlist | undefined = currentPlaylists.find((playlist: I_Playlist) => playlist.id === playlistId);

        if(!newPlaylist){
            newPlaylist = {name: "Untitled", id: playlistId, songs: []};
        }

        if(!newPlaylist.songs.includes(songId)){
            newPlaylist.songs.push(songId);
        }

        let updatedPlaylists: I_Playlist[] = currentPlaylists.filter((playlist: I_Playlist) => playlist.id !== playlistId).concat(newPlaylist);

        dispatch({ type: ADD_SONG_TO_PLAYLIST, payload: updatedPlaylists });
    }
}

export const renamePlaylist = (state: RootStateOrAny, playlistId: string, newName: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let currentPlaylists: I_Playlist[] = await getCurrentPlaylists(state);
        let updatedPlaylists: I_Playlist[] = currentPlaylists.map((item: I_Playlist) => {
            if(item.id === playlistId){
                return {...item, name: newName};
            }
            return item;
        })
        dispatch({ type: RENAME_PLAYLIST, payload: updatedPlaylists });
    }
}