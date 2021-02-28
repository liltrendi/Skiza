import React from 'react'
import {ViewStyle, TextStyle} from "react-native"
import { I_SongItemProps } from '../interfaces'

// SongList

export interface I_RenderItemProps {
    item: I_SongItemProps;
    index: number;
}

// Playlists

export interface I_PlaylistsProps {
    tabLabel?: string;
  }
  
  export interface I_PlaylistsStyles {
    container: ViewStyle;
    createPlaylist: ViewStyle;
    createPlaylistText: TextStyle;
    playlist: ViewStyle;
    playlistName: TextStyle;
    songCount: TextStyle;
  }
  
  // Create Playlist
  
  export interface I_CreatePlaylistProps {
  }
  
  export interface I_CreatePlaylistStyles {
    container: ViewStyle;
    inputText: TextStyle;
    bar: ViewStyle;
    input: ViewStyle;
    buttons: ViewStyle;
    cancel: ViewStyle;
    cancelText: TextStyle;
    create: ViewStyle;
    createText: TextStyle;
  }
  
  // Playlist
  
  export interface I_PlaylistProps {
    id: string;
  }
  
  export interface I_PlaylistStyles {
    safeAreaView: ViewStyle;
    flatlist: ViewStyle;
  }
  
  // AddSongsToPlaylist
  
  export interface I_AddSongsToPlaylistProps {
    id: string;
  }
  
  export interface I_AddSongsToPlaylistStyles {
    safeAreaView: ViewStyle;
    flatlist: ViewStyle;
  }

  // PlaylistSettings

  export interface I_PlaylistSettingsProps {

  }

  export interface I_PlaylistSettingsStyles {
      container: ViewStyle;
  }