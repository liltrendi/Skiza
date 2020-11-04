import React from 'react'
import { ViewStyle, TextStyle } from 'react-native'

// Search

export interface SearchProps {}

export interface SearchStyles {
    
}

// Bar

export interface BarProps {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    searchTerm: string;
}

export interface BarStyles {
    container: ViewStyle;
    bar: ViewStyle;
}

// NotStarted

export interface NotStartedProps {}

export interface NotStartedStyles {
    outerAnimationContainer: ViewStyle;
    innerAnimationContainer: ViewStyle;
    LottieView: ViewStyle;
    searchText: TextStyle;
}

// Results

export interface SearchResultsProps {
    searchTerm: string;
}

export interface SearchResultsStyles {
    container: ViewStyle;
}