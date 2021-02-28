import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import { DARK_THEME, LIGHT_THEME } from '../../../../constants/theme';
import { isThemeDark } from '../../../../util/theme';
import { I_PlaylistSettingsProps, I_PlaylistSettingsStyles } from './interfaces'

interface I_GlobalStateProps {
    theme: string;
}

const PlaylistSettings: React.FC<I_PlaylistSettingsProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_PlaylistSettingsStyles = getStyles(globalState);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            style={styles.container}
        >
            <View>
                <Text>
                    Settings for playlist
                </Text>
            </View>
        </ScrollView>
    )
}

export default PlaylistSettings;

const getStyles = (state: RootStateOrAny): I_PlaylistSettingsStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_PlaylistSettingsStyles>({
        container: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            flex: 1,
            paddingTop: 60
        }
    })
}