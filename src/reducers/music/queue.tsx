import { SET_SONG_QUEUE } from "../../constants/actions";

export interface I_SongQueue {
    queue: string[];
    next: string;
    prev: string;
}

interface I_ActionProps {
    type: string;
    payload: I_SongQueue;
}

type T_SongsReducer = (state: I_SongQueue, action: I_ActionProps) => I_SongQueue

const initialState: I_SongQueue = {queue: [], next: "", prev: ""};

export const songQueueReducer: T_SongsReducer = (state: I_SongQueue = initialState, action: I_ActionProps): I_SongQueue => {
    switch(action.type){
        case SET_SONG_QUEUE:
            return action.payload
        default:
            return state;
    }
}