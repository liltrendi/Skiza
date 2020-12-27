import { ISongsSchema } from "../../controllers/music/interfaces";

interface ActionProps {
    type: string;
    payload: ISongsSchema[];
}

type SongsReducer = (state: ISongsSchema[], action: ActionProps) => ISongsSchema[]

const initialState: ISongsSchema[] = [];

export const songsReducer: SongsReducer = (state: ISongsSchema[] = initialState, action: ActionProps): ISongsSchema[] => {
    switch(action.type){
        case "FETCHED_SONGS":
            return action.payload
        default:
            return state;
    }
}