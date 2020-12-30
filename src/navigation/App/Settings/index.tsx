import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {SettingsScreen} from "./screens"
import {settingsHeaderOptions} from "./options"

type T_SettingsStackNavigatorParams = {
    Settings: undefined;
}

const SettingsStack = createStackNavigator<T_SettingsStackNavigatorParams>()

interface I_SettingsStackScreensProps {}

export const SettingsStackScreens: React.FC<I_SettingsStackScreensProps> = (): JSX.Element => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name={"Settings"} component={SettingsScreen} options={settingsHeaderOptions} />
            {/* add more screens to home */}
        </SettingsStack.Navigator>
    )
}