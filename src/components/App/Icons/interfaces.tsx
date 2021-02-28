import { ViewStyle } from "react-native";

// AddToPlaylist

export interface I_AddToPlaylistIconProps {
    executor: () => Promise<void>;
}

export interface I_AddToPlaylistIconStyles {
    addIcon: ViewStyle;
}

// SongItemOptions

export interface I_SongItemOptionsIconProps {
    executor: () => void;
}

export interface I_SongItemOptionsIconStyles {
    addIcon: ViewStyle;
}