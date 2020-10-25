import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {HomeStackScreens} from "./Home"
import {screenOptions} from "./Tabs/Screen"
import {tabBarOptions} from "./Tabs/Bottom/"
import { GenresStackScreens } from "./Genres"

type AppStackNavigatorParams = {
    Home: undefined;
    Genres: undefined;
}

const AppStack = createBottomTabNavigator<AppStackNavigatorParams>();

export const AppStackScreens = (): JSX.Element => {
    return (
        <AppStack.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <AppStack.Screen name={"Home"} component={HomeStackScreens} />
            <AppStack.Screen name={"Genres"} component={GenresStackScreens} />
        </AppStack.Navigator>
    )
}