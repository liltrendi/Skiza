import React from 'react'
import { ViewStyle, TextStyle } from 'react-native'

// ReadStoragePermissionBlocked

export interface ReadStoragePermissionBlockedProps {}

export interface ReadStoragePermissionBlockedStyles {
    container: ViewStyle;
    LottieView: ViewStyle;
    screenText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}

// ReadStoragePermissionDenied

export interface ReadExternalStoragePermissionDeniedProps { 
    requestPermission: () => Promise<void>
}

export interface ReadExternalStoragePermissionDeniedStyles {
    container: ViewStyle;
    LottieView: ViewStyle;
    screenText: TextStyle;
    button: ViewStyle;
    buttonText: TextStyle;
}