import { check, PERMISSIONS, request } from "react-native-permissions"

type T_CheckReadStoragePermissionStatus = () => Promise<string>

export const checkReadStoragePermissionStatus: T_CheckReadStoragePermissionStatus = async (): Promise<string> => await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

export const requestReadStoragePermission = async (): Promise<string> => await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);