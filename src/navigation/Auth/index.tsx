import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {OnboardingScreen} from "./screens"
import { authScreenOptions } from "./options"

type T_AuthStackNavigatorParams = {
    Onboarding: undefined;
}

const AuthStack = createStackNavigator<T_AuthStackNavigatorParams>()

export const AuthStackScreens = (): JSX.Element => {
    return (
        <AuthStack.Navigator initialRouteName={"Onboarding"}>
            <AuthStack.Screen name={"Onboarding"} component={OnboardingScreen} options={authScreenOptions} />
        </AuthStack.Navigator>
    )
}