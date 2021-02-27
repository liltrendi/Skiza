import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {HomeScreen} from "./screens"
import {homeHeaderOptions, playlistHeaderOptions} from "./options"
import { RootStateOrAny, useSelector } from "react-redux"
import Playlist from "../../../components/App/Home/Playlist"

export type T_HomeStackNavigatorParams = {
    Home: undefined;
    Playlist: undefined;
}

const HomeStack = createStackNavigator<T_HomeStackNavigatorParams>()

interface I_HomeStackScreensProps {}

export const HomeStackScreens: React.FC<I_HomeStackScreensProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={"Home"} component={HomeScreen} options={homeHeaderOptions(globalState)} />
            <HomeStack.Screen name={"Playlist"} component={Playlist} options={({route}) => playlistHeaderOptions(globalState, route)} />
        </HomeStack.Navigator>
    )
}