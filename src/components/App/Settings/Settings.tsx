import React from 'react'
import { Text, View } from 'react-native'

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = (): JSX.Element => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings