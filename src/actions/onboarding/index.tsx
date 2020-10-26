import { AnyAction } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { requestReadStoragePermission } from "../../controllers/permissions/storage"

export const READ_EXTERNAL_STORAGE_PERMISSION_GRANTED: string = "READ_EXTERNAL_STORAGE_PERMISSION_GRANTED"
export const READ_EXTERNAL_STORAGE_PERMISSION_DENIED: string = "READ_EXTERNAL_STORAGE_PERMISSION_DENIED"
export const READ_EXTERNAL_STORAGE_PERMISSION_BLOCKED: string = "READ_EXTERNAL_STORAGE_PERMISSION_BLOCKED"
export const ONBOARDING_COMPLETE: string = "ONBOARDING_COMPLETE"

export const completeOnboarding = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
    return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
        let result = await requestReadStoragePermission()
        switch (result) {
            case "granted":
                dispatch({ type: READ_EXTERNAL_STORAGE_PERMISSION_GRANTED, payload: result });
                dispatch({ type: ONBOARDING_COMPLETE, payload: true });
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
        let result = await requestReadStoragePermission()
        switch (result) {
            case "granted":
                dispatch({ type: READ_EXTERNAL_STORAGE_PERMISSION_GRANTED, payload: result });
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