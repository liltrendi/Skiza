import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {SettingsScreen} from "./screens"
import {settingsHeaderOptions} from "./options"
import { RootStateOrAny, useSelector } from 'react-redux';

type T_SettingsStackNavigatorParams = {
    Settings: undefined;
}

const SettingsStack = createStackNavigator<T_SettingsStackNavigatorParams>()

interface I_SettingsStackScreensProps {}

export const SettingsStackScreens: React.FC<I_SettingsStackScreensProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name={"Settings"} component={SettingsScreen} options={settingsHeaderOptions(globalState)} />
            {/* add more screens to home */}
        </SettingsStack.Navigator>
    )
}