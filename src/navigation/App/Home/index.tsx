import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {HomeScreen} from "./screens"
import {homeHeaderOptions} from "./options"

export type T_HomeStackNavigatorParams = {
    Home: undefined;
}

const HomeStack = createStackNavigator<T_HomeStackNavigatorParams>()

interface I_HomeStackScreensProps {}

export const HomeStackScreens: React.FC<I_HomeStackScreensProps> = (): JSX.Element => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={"Home"} component={HomeScreen} options={homeHeaderOptions} />
            {/* add more screens to home */}
        </HomeStack.Navigator>
    )
}