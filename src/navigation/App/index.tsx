import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStackScreens } from "./Home"
import { SearchStackScreens } from "./Search"
import { SettingsStackScreens } from "./Settings"
import { screenOptions } from "./NavigatorOptions/Screen"
import { tabBarOptions } from "./NavigatorOptions/BottomTab"
import PlayerFooter from "../Shared/PlayerFooter"
import { RootStateOrAny, useSelector } from "react-redux"

type T_AppStackNavigatorParams = {
    Home: undefined;
    Search: undefined;
    Settings: undefined;
}

const AppStack = createBottomTabNavigator<T_AppStackNavigatorParams>();

export const AppStackScreens = (): JSX.Element => {
    const showingPlayerFooter: boolean = useSelector((state: RootStateOrAny) => state.currentSong);
    return (
        <React.Fragment>
            <AppStack.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
                <AppStack.Screen name={"Home"} component={HomeStackScreens} />
                <AppStack.Screen name={"Search"} component={SearchStackScreens} />
                <AppStack.Screen name={"Settings"} component={SettingsStackScreens} />
            </AppStack.Navigator>
            {showingPlayerFooter && <PlayerFooter />}
        </React.Fragment>
    )
}