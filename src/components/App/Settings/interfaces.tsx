import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'

// Settings

export interface I_SettingsProps {}

export interface I_SettingsStyles {
    container: ViewStyle;
}

// Settings - Theme

export interface I_SettingsThemeProps {}

export interface I_SettingsThemeStyles {
    container: ViewStyle;
    icon: ViewStyle;
    textContainer: ViewStyle;
    topText: TextStyle;
    bottomText: TextStyle;
    switch: ViewStyle;
}