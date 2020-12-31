interface I_ActionProps {
    type: string;
    payload: string;
}

type T_ThemeReducer = (state: string, action: I_ActionProps) => string

const initialState: string = "DARK";

export const themeReducer: T_ThemeReducer = (state: string = initialState, action: I_ActionProps): string => {
    switch(action.type){
        case "LIGHT":
            return action.payload;
        case "DARK":
            return action.payload
        default:
            return state;
    }
}