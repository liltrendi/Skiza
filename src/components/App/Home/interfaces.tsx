import React from 'react'
import {ViewStyle, TextStyle, ImageStyle} from "react-native"
import { ISongSchema } from '../../../controllers/music/interfaces'

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

export interface ISongListProps {
  tabLabel?: string;
}

export interface ISongItemProps {
    id: string;
    title: string;
    author: string;
    cover: any;
}

export interface RenderItemProps {
    item: ISongItemProps;
    index: number;
}

// SongItem

export interface ISongItemStyles {
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

export interface IGenreCategoriesProps {}

export interface IGenreCategoriesStyles {
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