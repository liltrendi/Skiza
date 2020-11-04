import React from 'react'
import { ViewStyle, TextStyle } from 'react-native'

// Home

export interface HomeHeaderProps {
    name: string;
    size: number;
    color: string;
    badgeCount?: number;
}

export interface HomeHeaderStyles {
  containerDot: ViewStyle;
  badgeText: TextStyle;
}

// Library

export interface LibraryHeaderProps {
    name: string;
    size: number;
    color: string;
    badgeCount?: number;
}

export interface LibraryHeaderStyles {
  containerDot: ViewStyle;
  badgeText: TextStyle;
}

// Search

export interface SearchHeaderProps {
    name: string;
    size: number;
    color: string;
    badgeCount?: number;
}

export interface SearchHeaderStyles {
  containerDot: ViewStyle;
  badgeText: TextStyle;
}

// Settings

export interface SettingsHeaderProps {
    name: string;
    size: number;
    color: string;
    badgeCount?: number;
}

export interface SettingsHeaderStyles {
  containerDot: ViewStyle;
  badgeText: TextStyle;
}