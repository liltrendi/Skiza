interface I_ActionProps {
    type: string;
    payload: string;
}

type T_StorageStatusReducer = (state: string, action: I_ActionProps) => string

const initialState: string = "none";

export const storageStatusReducer: T_StorageStatusReducer = (state: string = initialState, action: I_ActionProps): string => {
    switch(action.type){
        case "READ_EXTERNAL_STORAGE_PERMISSION_GRANTED":
            return action.payload
        case "READ_EXTERNAL_STORAGE_PERMISSION_DENIED":
            return action.payload
        case "READ_EXTERNAL_STORAGE_PERMISSION_BLOCKED":
            return action.payload
        default:
            return state;
    }
}