import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {SettingsScreen} from "./screens"
import {settingsHeaderOptions} from "./options"

type SettingsStackNavigatorParams = {
    Settings: undefined;
}

const SettingsStack = createStackNavigator<SettingsStackNavigatorParams>()

interface SettingsStackScreensProps {}

export const SettingsStackScreens: React.FC<SettingsStackScreensProps> = (): JSX.Element => {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name={"Settings"} component={SettingsScreen} options={settingsHeaderOptions} />
            {/* add more screens to home */}
        </SettingsStack.Navigator>
    )
}