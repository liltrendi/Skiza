import { ISongSchema } from "../../controllers/music/interfaces";

interface ActionProps {
    type: string;
    payload: ISongSchema[];
}

type SongsReducer = (state: ISongSchema[], action: ActionProps) => ISongSchema[]

const initialState: ISongSchema[] = [];

export const songsReducer: SongsReducer = (state: ISongSchema[] = initialState, action: ActionProps): ISongSchema[] => {
    switch(action.type){
        case "FETCHED_SONGS":
            return action.payload
        default:
            return state;
    }
}