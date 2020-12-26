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

export interface LocalSongSchema {
  fileName: string;
  path: string;
  title: string;
  author: string;
  duration: string;
  album?: string;
}

export interface RenderItemProps {
    item: SongSchema;
    index: number;
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

// Genre Categories

export interface GenreCategoriesProps {}

export interface GenreCategoriesStyles {
  container: ViewStyle;
  innerContainer: ViewStyle;
  exploreHeaders: ViewStyle;
  headerLeftTxt: TextStyle;
  headerRightView: ViewStyle;
  headerRightText: TextStyle;
  outerCategoryContainer: ViewStyle;
  card: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  cardTitleView: ViewStyle;
  cardTitleText: TextStyle;
}