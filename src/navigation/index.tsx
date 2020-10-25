import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {AppStackScreens} from "./App"
import {AuthStackScreens} from "./Auth"

type MainAppNavigation = (onboardingComplete: boolean) => JSX.Element

export const mainAppNavigation: MainAppNavigation = (onboardingComplete: boolean): JSX.Element => {
    return (
        <NavigationContainer>
            {onboardingComplete ? AppStackScreens():AuthStackScreens()}
        </NavigationContainer>
    )
}