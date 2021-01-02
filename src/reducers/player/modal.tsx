import { HIDE_PLAYER_MODAL, SHOW_PLAYER_MODAL } from "../../constants/actions";

const initialState: boolean = false;

interface I_ActionProps {
    type: string;
}

type T_PlayerModalReducer = (state: boolean, action: I_ActionProps) => boolean;

export const playerModalReducer: T_PlayerModalReducer = (state: boolean = initialState, action: I_ActionProps): boolean => {
    switch(action.type){
        case SHOW_PLAYER_MODAL:
            return true;
        case HIDE_PLAYER_MODAL:
            return false;
        default:
            return state;
    }
}