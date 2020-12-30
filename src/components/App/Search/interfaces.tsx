import React from 'react'
import { ViewStyle, TextStyle } from 'react-native'
import { I_SongSchema } from '../../../controllers/music/interfaces'

// Search

export interface I_SearchProps {}

export interface I_SearchStyles {
    
}

// Bar

export interface I_BarProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    searchTerm: string;
}

export interface I_BarStyles {
    container: ViewStyle;
    bar: ViewStyle;
}

// NotStarted

export interface I_NotStartedProps {}

export interface I_NotStartedStyles {
    outerAnimationContainer: ViewStyle;
    innerAnimationContainer: ViewStyle;
    LottieView: ViewStyle;
    searchText: TextStyle;
}

// Results

export interface I_SearchResultsProps {
    searchTerm: string;
    matchedSongs: I_SongSchema[];
}

export interface I_SearchResultsStyles {
    container: ViewStyle;
    LottieView: ViewStyle;
    noResultsText: TextStyle;
    searchTerm: TextStyle;
    songList: ViewStyle;
}