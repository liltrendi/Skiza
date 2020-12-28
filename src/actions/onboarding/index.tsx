import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { defaultSongOptions, fetchSongsFromLocalStorage } from "../../controllers/music/getSongs"
import { ISongsSchema } from "../../controllers/music/interfaces"
import { requestReadStoragePermission } from "../../controllers/permissions/storage"
import { FETCHED_SONGS } from '../../actions/music';

interface UpdateStoragePermissionStatusActionProps {
    type: string;
    payload: string;
}

export const READ_EXTERNAL_STORAGE_PERMISSION_GRANTED: string = "READ_EXTERNAL_STORAGE_PERMISSION_GRANTED";
export const READ_EXTERNAL_STORAGE_PERMISSION_DENIED: string = "READ_EXTERNAL_STORAGE_PERMISSION_DENIED";
export const READ_EXTERNAL_STORAGE_PERMISSION_BLOCKED: string = "READ_EXTERNAL_STORAGE_PERMISSION_BLOCKED";
export const ONBOARDING_COMPLETE: string = "ONBOARDING_COMPLETE";

export const completeOnboarding = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let result: string = await requestReadStoragePermission();
        let songs: ISongsSchema[] = [];
        switch (result) {
            case "granted":
                songs = await fetchSongsFromLocalStorage(defaultSongOptions);
                dispatch({ type: READ_EXTERNAL_STORAGE_PERMISSION_GRANTED, payload: result });
                dispatch({ type: ONBOARDING_COMPLETE, payload: true });
                dispatch({ type: FETCHED_SONGS, payload: songs });
                return
            case "denied":
                dispatch({ type: READ_EXTERNAL_STORAGE_PERMISSION_DENIED, payload: result });
                dispatch({ type: ONBOARDING_COMPLETE, payload: true });
                return
            case "blocked":
                dispatch({ type: READ_EXTERNAL_STORAGE_PERMISSION_BLOCKED, payload: result });
                dispatch({ type: ONBOARDING_COMPLETE, payload: true });
                return
        }
    }
}

export const requestReadExternalStoragePermissionAgain = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let result = await requestReadStoragePermission();
        let songs: ISongsSchema[] = [];
        switch (result) {
            case "granted":
                songs = await fetchSongsFromLocalStorage(defaultSongOptions);
                dispatch({ type: READ_EXTERNAL_STORAGE_PERMISSION_GRANTED, payload: result });
                dispatch({ type: FETCHED_SONGS, payload: songs });
                return
            case "denied":
                dispatch({ type: READ_EXTERNAL_STORAGE_PERMISSION_DENIED, payload: result });
                return
            case "blocked":
                dispatch({ type: READ_EXTERNAL_STORAGE_PERMISSION_BLOCKED, payload: result });
                return
        }
    }
}

export const updateStoragePermissionStatus = (payload: string): UpdateStoragePermissionStatusActionProps => {
    switch (payload) {
        case "granted":
            return { type: READ_EXTERNAL_STORAGE_PERMISSION_GRANTED, payload: payload }
        case "denied":
            return { type: READ_EXTERNAL_STORAGE_PERMISSION_DENIED, payload: payload }
        case "blocked":
            return { type: READ_EXTERNAL_STORAGE_PERMISSION_BLOCKED, payload: payload }
        default:
            return { type: "", payload: ""}
    }
}