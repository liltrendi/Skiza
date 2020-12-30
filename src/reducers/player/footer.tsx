const initialState: boolean = true;

interface I_ActionProps {
    type: string;
    payload: boolean;
}

type T_PlayerFooterReducer = (state: boolean, action: I_ActionProps) => boolean

export const playerFooterReducer: T_PlayerFooterReducer = (state: boolean = initialState, action: I_ActionProps): boolean => {
    switch(action.type){
        case "SHOW_PLAYER_FOOTER":
            return action.payload;
        case "HIDE_PLAYER_FOOTER":
            return action.payload;
        default:
            return state;
    }
}