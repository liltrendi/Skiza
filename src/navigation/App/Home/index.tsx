import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {HomeScreen} from "./screens"
import {homeHeaderOptions} from "./options"
import { RootStateOrAny, useSelector } from "react-redux"

export type T_HomeStackNavigatorParams = {
    Home: undefined;
}

const HomeStack = createStackNavigator<T_HomeStackNavigatorParams>()

interface I_HomeStackScreensProps {}

export const HomeStackScreens: React.FC<I_HomeStackScreensProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={"Home"} component={HomeScreen} options={homeHeaderOptions(globalState)} />
            {/* add more screens to home */}
        </HomeStack.Navigator>
    )
}