import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';
import { RootStateOrAny } from 'react-redux';
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import { Route } from "@react-navigation/native"
import { I_Playlist } from '../../../controllers/music/interfaces';

interface I_GlobalStateProps {
  theme: string;
  playlists: I_Playlist[];
}

export const homeHeaderOptions = (state: RootStateOrAny): StackNavigationOptions => {
  const {theme}: I_GlobalStateProps = state;
  return {
    title: 'Skiza', 
    headerTitleStyle: {
      fontFamily: "Shojumaru-Regular",
      fontSize: 22,
      color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
    },
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {
      paddingLeft: 15,
    },
    headerRightContainerStyle: {
      paddingRight: 15,
      paddingBottom: 25
    },
    headerRight: (props) => (
      <React.Fragment />
    ),
    headerTransparent: false,
    headerStyle: {
      height: 60,
      backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg
    },
  };
}

export const playlistHeaderOptions = (state: RootStateOrAny, route: Route<string, {id: string} | undefined>): StackNavigationOptions => {
  const {theme, playlists}: I_GlobalStateProps = state;
  let playlistId: string | undefined = route.params?.id;
  let playlistName: string | undefined;
  if(playlistId){
    playlistName = playlists.find((playlist: I_Playlist) => playlist.id === playlistId)?.name;
  }
  return {
    title: playlistName || 'Playlist', 
    headerTitleStyle: {
      fontFamily: "CircularStd-Bold",
      fontSize: 23,
      color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
    },
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {
      paddingLeft: 15,
    },
    headerRightContainerStyle: {
      paddingRight: 15,
      paddingBottom: 25
    },
    headerRight: (props) => (
      <React.Fragment />
    ),
    headerTransparent: true,
    headerStyle: {
      height: 60,
      backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg
    },
  };
}

export const addSongsToPlaylistHeaderOptions = (state: RootStateOrAny, route: Route<string, {id: string} | undefined>): StackNavigationOptions => {
  const {theme, playlists}: I_GlobalStateProps = state;
  let playlistId: string | undefined = route.params?.id;
  let playlistName: string | undefined;
  if(playlistId){
    playlistName = playlists.find((playlist: I_Playlist) => playlist.id === playlistId)?.name;
  }
  return {
    title: "Add songs", 
    headerTitleStyle: {
      fontFamily: "CircularStd-Bold",
      fontSize: 23,
      color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
    },
    headerTitleAlign: 'center',
    headerLeftContainerStyle: {
      paddingLeft: 15,
    },
    headerRightContainerStyle: {
      paddingRight: 15,
      paddingBottom: 25
    },
    headerRight: (props) => (
      <React.Fragment />
    ),
    headerTransparent: true,
    headerStyle: {
      height: 60,
      backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg
    },
  };
}