import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStackScreens } from "./Home"
import { SearchStackScreens } from "./Search"
import { SettingsStackScreens } from "./Settings"
import { screenOptions } from "./NavigatorOptions/Screen"
import { tabBarOptions } from "./NavigatorOptions/BottomTab"
import PlayerFooter from "../Shared/PlayerFooter"
import { RootStateOrAny, useSelector } from "react-redux"
import { I_SongSchema } from "../../controllers/music/interfaces"

type T_AppStackNavigatorParams = {
    Home: undefined;
    Search: undefined;
    Settings: undefined;
}

interface I_GlobalStateProps {
    currentSong: I_SongSchema | null;
}

const AppStack = createBottomTabNavigator<T_AppStackNavigatorParams>();

export const AppStackScreens = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {currentSong}: I_GlobalStateProps = globalState;
    return (
        <React.Fragment>
            <AppStack.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
                <AppStack.Screen name={"Home"} component={HomeStackScreens} />
                <AppStack.Screen name={"Search"} component={SearchStackScreens} />
                <AppStack.Screen name={"Settings"} component={SettingsStackScreens} />
            </AppStack.Navigator>
            {currentSong && <PlayerFooter />}
        </React.Fragment>
    )
}