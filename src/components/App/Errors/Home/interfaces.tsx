import { ViewStyle, TextStyle } from 'react-native'

// ReadStoragePermissionBlocked

export interface I_ReadStoragePermissionBlockedProps {}

export interface I_ReadStoragePermissionBlockedStyles {
    container: ViewStyle;
    LottieView: ViewStyle;
    screenText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}

// ReadStoragePermissionDenied

export interface I_ReadExternalStoragePermissionDeniedProps { 
    requestReadExternalStoragePermissionAgain: () => Promise<void>
}

export interface I_ReadExternalStoragePermissionDeniedStyles {
    container: ViewStyle;
    LottieView: ViewStyle;
    screenText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}

// NoSongsOnDevice

export interface I_NoSongsOnDeviceProps {
    fetchSongs: () => Promise<void>;
}

export interface I_NoSongsOnDeviceStyles {
    safeAreaContainer: ViewStyle;
    container: ViewStyle;
    LottieView: ViewStyle;
    screenText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}

// NoPlaylists

export interface I_NoPlaylistsProps {
    
}

export interface I_NoPlaylistsStyles {
    safeAreaContainer: ViewStyle;
    container: ViewStyle;
    LottieView: ViewStyle;
    screenText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}

// NoSongsInPlaylist

export interface I_NoSongsInPlaylistProps {
    playlistName: string | null;
}

export interface I_NoSongsInPlaylistStyles {
    safeAreaContainer: ViewStyle;
    container: ViewStyle;
    LottieView: ViewStyle;
    screenText: TextStyle;
    playlistName: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}