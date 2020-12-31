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

// Settings - Report Issue

export interface I_SettingsReportIssueProps {}

export interface I_SettingsReportIssueStyles {
    container: ViewStyle;
    icon: ViewStyle;
    textContainer: ViewStyle;
    topText: TextStyle;
    bottomText: TextStyle;
}

// Settings - About App

export interface I_SettingsAboutAppProps {}

export interface I_SettingsAboutAppStyles {
    container: ViewStyle;
    icon: ViewStyle;
    textContainer: ViewStyle;
    topText: TextStyle;
    bottomText: TextStyle;
}

// Settings - Share App

export interface I_SettingsShareAppProps {}

export interface I_SettingsShareAppStyles {
    container: ViewStyle;
    icon: ViewStyle;
    textContainer: ViewStyle;
    topText: TextStyle;
    bottomText: TextStyle;
}