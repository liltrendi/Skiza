import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {HomeStackScreens} from "./Home"
import { SearchStackScreens } from "./Search"
import {LibraryStackScreens} from "./Library"
import { SettingsStackScreens } from "./Settings"
import {screenOptions} from "./NavigatorOptions/Screen"
import {tabBarOptions} from "./NavigatorOptions/BottomTab"

type AppStackNavigatorParams = {
    Home: undefined;
    Library: undefined;
    Search: undefined;
    Settings: undefined;
}

const AppStack = createBottomTabNavigator<AppStackNavigatorParams>();

export const AppStackScreens = (): JSX.Element => {
    return (
        <AppStack.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <AppStack.Screen name={"Home"} component={HomeStackScreens} />
            <AppStack.Screen name={"Search"} component={SearchStackScreens} />
            <AppStack.Screen name={"Library"} component={LibraryStackScreens} />
            <AppStack.Screen name={"Settings"} component={SettingsStackScreens} />
        </AppStack.Navigator>
    )
}