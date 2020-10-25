interface ActionProps {
    type: string,
    payload: string
}

type ThemeReducer = (state: string, action: ActionProps) => string

const initialState: string = "light";

export const themeReducer: ThemeReducer = (state: string = initialState, action: ActionProps): string => {
    switch(action.type){
        case "LIGHT":
            return initialState;
        case "DARK":
            return action.payload
        default:
            return state;
    }
}