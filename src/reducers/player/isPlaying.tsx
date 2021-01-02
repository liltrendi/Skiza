import { IS_NOT_PLAYING, IS_PLAYING } from "../../constants/actions";

const initialState: boolean = false;

interface I_ActionProps {
    type: string;
}

type T_IsPlayingReducer = (state: boolean, action: I_ActionProps) => boolean;

export const isPlayingReducer: T_IsPlayingReducer = (state: boolean = initialState, action: I_ActionProps): boolean => {
    switch(action.type){
        case IS_PLAYING:
            return true;
        case IS_NOT_PLAYING:
            return false;
        default:
            return state;
    }
}