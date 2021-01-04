import { IS_NOT_PLAYING, IS_NOT_SHUFFLING, IS_PLAYING, IS_SHUFFLING, REPEAT_ALL, REPEAT_NONE, REPEAT_ONE } from "../../constants/actions";

export interface I_SongStateInitialProps {
    playing: boolean;
    shuffling: boolean;
    repeat: string;
}

const initialState: I_SongStateInitialProps = {
    playing: false,
    shuffling: false,
    repeat: "none"
};

interface I_ActionProps {
    type: string;
}

type T_SongStateReducer = (state: I_SongStateInitialProps, action: I_ActionProps) => I_SongStateInitialProps;

export const songStateReducer: T_SongStateReducer = (state: I_SongStateInitialProps = initialState, action: I_ActionProps): I_SongStateInitialProps => {
    switch(action.type){
        case IS_PLAYING:
            return {...state, playing: true};
        case IS_NOT_PLAYING:
            return {...state, playing: false};
        case IS_SHUFFLING:
            return {...state, shuffling: true};
        case IS_NOT_SHUFFLING:
            return {...state, shuffling: false};
        case REPEAT_NONE:
            return {...state, repeat: "none"};
        case REPEAT_ONE:
            return {...state, repeat: "one"};
        case REPEAT_ALL:
            return {...state, repeat: "all"};
        default:
            return state;
    }
}