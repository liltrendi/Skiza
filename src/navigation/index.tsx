import React, { useEffect } from "react"
import {NavigationContainer} from "@react-navigation/native"
import {AppStackScreens} from "./App"
import {AuthStackScreens} from "./Auth"
import { useDispatch } from "react-redux"
import { IS_NOT_PLAYING } from "../constants/actions"

type T_MainAppNavigation = (onboardingComplete: boolean) => JSX.Element

export const mainAppNavigation: T_MainAppNavigation = (onboardingComplete: boolean): JSX.Element => {
    const dispatch = useDispatch();

    const stopMusicIfPlaying = (): void => {
        dispatch({type: IS_NOT_PLAYING})
    }

    useEffect(() => stopMusicIfPlaying(), [])

    const App: React.FC<{}> = (): JSX.Element => onboardingComplete ? AppStackScreens():AuthStackScreens();
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}