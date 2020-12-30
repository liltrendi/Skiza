import { I_SongSchema } from "../../controllers/music/interfaces";

const initialState: null | I_SongSchema = null;

interface I_ActionProps {
    type: string;
    payload: I_SongSchema;
}

type T_CurrentSongReducer = (state: null | I_SongSchema, action: I_ActionProps) => I_SongSchema | null;

export const currentSongReducer: T_CurrentSongReducer = (state: null | I_SongSchema = initialState, action: I_ActionProps): I_SongSchema | null => {
    switch(action.type){
        case "SET_CURRENT_SONG":
            return action.payload;
        case "RESET_CURRENT_SONG":
            return action.payload;
        default:
            return state;
    }
}