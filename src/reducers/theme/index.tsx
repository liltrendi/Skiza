import { DARK_THEME, LIGHT_THEME } from "../../constants/actions";

interface I_ActionProps {
    type: string;
    payload: string;
}

type T_ThemeReducer = (state: string, action: I_ActionProps) => string

const initialState: string = LIGHT_THEME;

export const themeReducer: T_ThemeReducer = (state: string = initialState, action: I_ActionProps): string => {
    switch(action.type){
        case LIGHT_THEME:
            return action.payload;
        case DARK_THEME:
            return action.payload
        default:
            return state;
    }
}