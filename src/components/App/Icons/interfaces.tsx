import { ViewStyle } from "react-native";

// AddToPlaylist

export interface I_AddToPlaylistIconProps {
    executor: () => Promise<void>;
}

export interface I_AddToPlaylistIconStyles {
    addIcon: ViewStyle;
}

// RemoveFromPlaylist

export interface I_RemoveFromPlaylistIconProps {
    executor: () => Promise<void>;
}

export interface I_RemoveFromPlaylistIconStyles {
    addIcon: ViewStyle;
}

// SongItemOptions

export interface I_SongItemOptionsIconProps {
    executor: () => void;
    iconStyles?: ViewStyle;
}

export interface I_SongItemOptionsIconStyles {
    addIcon: ViewStyle;
}