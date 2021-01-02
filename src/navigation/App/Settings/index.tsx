import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {SettingsScreen, AppInfoScreen} from "./screens"
import {settingsHeaderOptions, appInfoHeaderOptions} from "./options"
import { RootStateOrAny, useSelector } from 'react-redux';

export type T_SettingsStackNavigatorParams = {
    Settings: undefined;
    AppInfo: undefined;
}

const SettingsStack = createStackNavigator<T_SettingsStackNavigatorParams>()

interface I_SettingsStackScreensProps {} 

export const SettingsStackScreens: React.FC<I_SettingsStackScreensProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name={"Settings"} component={SettingsScreen} options={settingsHeaderOptions(globalState)} />
            <SettingsStack.Screen name={"AppInfo"} component={AppInfoScreen} options={appInfoHeaderOptions(globalState)} />
        </SettingsStack.Navigator>
    )
}