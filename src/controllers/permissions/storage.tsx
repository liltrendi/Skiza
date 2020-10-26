import { check, PERMISSIONS, request } from "react-native-permissions"

type CheckReadStoragePermissionStatus = () => Promise<string>

export const checkReadStoragePermissionStatus: CheckReadStoragePermissionStatus = async (): Promise<string> => await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

export const requestReadStoragePermission = async (): Promise<string> => await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);