import { ISongSchema } from "../../controllers/music/interfaces";

const initialState: null | ISongSchema = null;

interface ActionProps {
    type: string;
    payload: ISongSchema;
}

type CurrentSongReducer = (state: null | ISongSchema, action: ActionProps) => ISongSchema | null;

export const currentSongReducer: CurrentSongReducer = (state: null | ISongSchema = initialState, action: ActionProps): ISongSchema | null => {
    switch(action.type){
        case "SET_CURRENT_SONG":
            return action.payload;
        case "RESET_CURRENT_SONG":
            return action.payload;
        default:
            return state;
    }
}