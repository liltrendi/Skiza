const initialState: boolean = false;

interface ActionProps {
    type: string;
    payload: boolean;
}

type PlayerFooterReducer = (state: boolean, action: ActionProps) => boolean

export const playerFooterReducer: PlayerFooterReducer = (state: boolean = initialState, action: ActionProps): boolean => {
    switch(action.type){
        case "SHOW_PLAYER_FOOTER":
            return action.payload;
        case "HIDE_PLAYER_FOOTER":
            return action.payload;
        default:
            return state;
    }
}