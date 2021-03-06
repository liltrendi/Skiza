import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'
import { DARK_THEME, LIGHT_THEME } from '../../../../constants/theme'
import { isThemeDark } from '../../../../util/theme'
import AboutApp from '../About'
import { I_SettingsProps, I_SettingsStyles } from '../interfaces'
import ReportIssue from '../ReportIssue'
import ShareApp from '../Share'
import Theme from '../Theme'
 
interface I_GlobalStateProps {
    theme: string;
}

const Settings: React.FC<I_SettingsProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_SettingsStyles = getStyles(globalState);
    return (
        <ScrollView
            scrollEventThrottle={16}
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Theme />
            <ReportIssue />
            <ShareApp />
            <AboutApp />
        </ScrollView>
    )
}

export default Settings

const getStyles = (state: RootStateOrAny): I_SettingsStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_SettingsStyles>({
        container: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            paddingTop: 20,
            flex: 1,
        }
    })
}