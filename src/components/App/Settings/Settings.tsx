import React from 'react'
import { Text, View } from 'react-native'
import { I_SettingsProps } from './interfaces'

const Settings: React.FC<I_SettingsProps> = (): JSX.Element => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings