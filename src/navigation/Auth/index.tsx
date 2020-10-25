import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {OnboardingScreen} from "./screens"
import { authScreenOptions } from "./options"

type AuthStackNavigatorParams = {
    Onboarding: undefined;
}

const AuthStack = createStackNavigator<AuthStackNavigatorParams>()

export const AuthStackScreens = (): JSX.Element => {
    return (
        <AuthStack.Navigator initialRouteName={"Onboarding"}>
            <AuthStack.Screen name={"Onboarding"} component={OnboardingScreen} options={authScreenOptions} />
        </AuthStack.Navigator>
    )
}