import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'
import { I_SettingsProps, I_SettingsStyles } from './interfaces'
import Theme from './Theme'

const Settings: React.FC<I_SettingsProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_SettingsStyles = getStyles(globalState);
    return (
        <View style={styles.container}>
            <Theme />
        </View>
    )
}

export default Settings

const getStyles = (state: RootStateOrAny): I_SettingsStyles => {
    return StyleSheet.create<I_SettingsStyles>({
        container: {
            marginTop: 60,
            flex: 1,
        }
    })
}