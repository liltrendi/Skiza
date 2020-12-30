import { I_SongSchema } from "../../controllers/music/interfaces";

interface I_ActionProps {
    type: string;
    payload: I_SongSchema[];
}

type T_SongsReducer = (state: I_SongSchema[], action: I_ActionProps) => I_SongSchema[]

const initialState: I_SongSchema[] = [];

export const songsReducer: T_SongsReducer = (state: I_SongSchema[] = initialState, action: I_ActionProps): I_SongSchema[] => {
    switch(action.type){
        case "FETCHED_SONGS":
            return action.payload
        default:
            return state;
    }
}