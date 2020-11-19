import React from 'react'
import {ViewStyle, TextStyle, ImageStyle} from "react-native"

// Home

export interface HomeProps {};

export interface HomeStyles {
  container: ViewStyle
}

export interface ReadExternalStoragePermissionStatusConfig {
  granted: boolean;
  denied: boolean;
  blocked: boolean;
}

// SongList

export interface SongListProps {}

export interface SongSchema {
    id: string;
    title: string;
    artist: string;
    cover?: any;
    isActive: boolean;
}

export interface RenderItemProps {
    item: SongSchema;
}

// SongItem

export interface SongItemStyles {
    container: ViewStyle;
    coverContainer: ViewStyle;
    cover: ImageStyle;
    textContainer: ViewStyle;
    title: TextStyle;
    divider: ViewStyle;
    artist: TextStyle;
    optionsIcon: ViewStyle;
}