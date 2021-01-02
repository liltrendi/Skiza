import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'
import { APP_VERSION, CONTACT_US_MAIL_LINK, ONLINE_PORTFOLIO } from '../../../../constants/settings'
import { DARK_THEME, LIGHT_THEME } from '../../../../constants/theme'
import { isThemeDark } from '../../../../util/theme'
import { I_AppInfoProps, I_AppInfoStyles } from '../interfaces'

interface I_GlobalStateProps {
    theme: string; 
}

const AppInfo: React.FC<I_AppInfoProps> = (): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_AppInfoStyles = getStyles(globalState);

    const visitPortfolio = (): Promise<void> => Linking.openURL(ONLINE_PORTFOLIO);
    const openMail = (): Promise<void> => Linking.openURL(CONTACT_US_MAIL_LINK);

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.appView}>
                    <Text style={styles.appName}>Skiza</Text>
                    <Text style={styles.appVersion}>Version {APP_VERSION}</Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={visitPortfolio} style={styles.devView}>
                    <Text style={styles.devTitle}>Developed by</Text>
                    <Text style={styles.devName}>Brian Njogu</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={openMail} style={styles.contactView}>
                    <Text style={styles.contactTitle}>Contact Us</Text>
                    <Text style={styles.contactMail}>briancanspit@gmail.com</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AppInfo

const getStyles = (state: RootStateOrAny): I_AppInfoStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_AppInfoStyles>({
        container: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            paddingTop: 20,
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        innerContainer: {
            marginTop: -50
        },
        appView: {
            alignItems: "center",
            marginBottom: 30
        },
        appName: {
            fontFamily: "CircularStd-Bold",
            fontSize: 26,
            color: isThemeDark(theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt
        },
        appVersion: {
            fontFamily: "CircularStd-Book",
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontSize: 18,
            paddingTop: 10
        },
        devView: {
            alignItems: "center",
            marginBottom: 30
        },
        devTitle: {
            fontFamily: "CircularStd-Bold",
            fontSize: 26,
            color: isThemeDark(theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt
        },
        devName: {
            fontFamily: "CircularStd-Book",
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontSize: 18,
            paddingTop: 10
        },
        contactView: {
            alignItems: "center",
            marginBottom: 30
        },
        contactTitle: {
            fontFamily: "CircularStd-Bold",
            fontSize: 26,
            color: isThemeDark(theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt
        },
        contactMail: {
            fontFamily: "CircularStd-Book",
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontSize: 18,
            paddingTop: 10
        },
    })
}