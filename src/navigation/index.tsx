import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {AppStackScreens} from "./App"
import {AuthStackScreens} from "./Auth"
import PlayerFooter from "./Shared/PlayerFooter"

type MainAppNavigation = (onboardingComplete: boolean) => JSX.Element

export const mainAppNavigation: MainAppNavigation = (onboardingComplete: boolean): JSX.Element => {
    const App: React.FC<{}> = (): JSX.Element => onboardingComplete ? AppStackScreens():AuthStackScreens();
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}