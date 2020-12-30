import React from 'react'
import { ViewStyle, TextStyle } from 'react-native'

// Home

export interface I_HomeHeaderProps {
    name: string;
    size: number;
    color: string;
    badgeCount?: number;
}

export interface I_HomeHeaderStyles {
  containerDot: ViewStyle;
  badgeText: TextStyle;
}

// Search

export interface I_SearchHeaderProps {
    name: string;
    size: number;
    color: string;
    badgeCount?: number;
}

export interface I_SearchHeaderStyles {
  containerDot: ViewStyle;
  badgeText: TextStyle;
}

// Settings

export interface I_SettingsHeaderProps {
    name: string;
    size: number;
    color: string;
    badgeCount?: number;
}

export interface I_SettingsHeaderStyles {
  containerDot: ViewStyle;
  badgeText: TextStyle;
}