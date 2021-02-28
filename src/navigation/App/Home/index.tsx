import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {HomeScreen} from "./screens"
import {addSongsToPlaylistHeaderOptions, homeHeaderOptions, playlistHeaderOptions, playlistSettingsHeaderOptions} from "./options"
import { RootStateOrAny, useSelector } from "react-redux"
import Playlist from "../../../components/App/Home/Playlists/Playlist"
import AddSongsToPlaylist from "../../../components/App/Home/Playlists/AddSongsToPlaylist"
import PlaylistSettings from "../../../components/App/Home/Playlists/PlaylistSettings"

export type T_HomeStackNavigatorParams = {
    Home: undefined;
    Playlist: undefined;
    AddSongsToPlaylist: undefined;
    PlaylistSettings: undefined;
}

const HomeStack = createStackNavigator<T_HomeStackNavigatorParams>()

interface I_HomeStackScreensProps {}

export const HomeStackScreens: React.FC<I_HomeStackScreensProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={"Home"} component={HomeScreen} options={homeHeaderOptions(globalState)} />
            <HomeStack.Screen name={"Playlist"} component={Playlist} options={({route, navigation}) => playlistHeaderOptions(globalState, route, navigation)} />
            <HomeStack.Screen name={"AddSongsToPlaylist"} component={AddSongsToPlaylist} options={({route}) => addSongsToPlaylistHeaderOptions(globalState, route)} />
            <HomeStack.Screen name={"PlaylistSettings"} component={PlaylistSettings} options={({route}) => playlistSettingsHeaderOptions(globalState, route)} />
        </HomeStack.Navigator>
    )
}