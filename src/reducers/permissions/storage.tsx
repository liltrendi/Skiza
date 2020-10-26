interface ActionProps {
    type: string;
    payload: string;
}

type StorageStatusReducer = (state: string, action: ActionProps) => string

const initialState: string = "none";

export const storageStatusReducer: StorageStatusReducer = (state: string = initialState, action: ActionProps): string => {
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