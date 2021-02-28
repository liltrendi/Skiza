import { ADD_SONG_TO_PLAYLIST, CREATE_PLAYLIST, RENAME_PLAYLIST } from "../../constants/actions";
import { I_Playlist } from "../../controllers/music/interfaces";

interface I_ActionProps {
    type: string;
    payload: I_Playlist[];
}

type T_PlaylistsReducer = (state: I_Playlist[], action: I_ActionProps) => I_Playlist[]

const initialState: I_Playlist[] = [];

export const playlistsReducer: T_PlaylistsReducer = (state: I_Playlist[] = initialState, action: I_ActionProps): I_Playlist[] => {
    switch(action.type){
        case CREATE_PLAYLIST:
            return action.payload;
        case ADD_SONG_TO_PLAYLIST:
            return action.payload;
        case RENAME_PLAYLIST:
            return action.payload;
        default:
            return state;
    }
}