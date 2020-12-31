import React from 'react'
import {ViewStyle, TextStyle, ImageStyle} from "react-native"
import { I_UniqueArtist } from '../../../controllers/music/interfaces'

// Home

export interface I_HomeProps {};

export interface I_HomeStyles {
  container: ViewStyle
  scrollableTabView: ViewStyle;
  tabBarTextStyle: TextStyle;
}

export interface I_ReadExternalStoragePermissionStatusConfig {
  granted: boolean;
  denied: boolean;
  blocked: boolean;
}

// SongList

export interface I_SongListProps {
  tabLabel?: string;
}

export interface I_SongListStyles {
  flatList: ViewStyle;
}

export interface I_SongItemProps {
    id: string;
    title: string;
    author: string;
    cover: string;
}

export interface I_RenderItemProps {
    item: I_SongItemProps;
    index: number;
}

// SongItem

export interface I_SongItemStyles {
    container: ViewStyle;
    coverContainer: ViewStyle;
    cover: ImageStyle;
    textContainer: ViewStyle;
    title: TextStyle;
    divider: ViewStyle;
    author: TextStyle;
    optionsIcon: ViewStyle;
}

// Genre Categories

export interface I_GenreCategoriesProps {
  uniqueArtists: I_UniqueArtist[];
}

export interface I_GenreCategoriesStyles {
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