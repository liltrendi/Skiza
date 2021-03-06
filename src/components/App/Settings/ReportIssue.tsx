import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Linking } from 'react-native'
import { RootStateOrAny,  useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { I_SettingsReportIssueProps, I_SettingsReportIssueStyles } from './interfaces';
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import { REPORT_A_PROBLEM_MAIL_LINK } from '../../../constants/settings';

interface I_GlobalStateProps {
    theme: string;
}

const ReportIssue: React.FC<I_SettingsReportIssueProps> = ({}): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {theme}: I_GlobalStateProps = globalState;
    const styles: I_SettingsReportIssueStyles = getStyles(globalState);

    const reportIssue = (): void => {
        Linking.openURL(REPORT_A_PROBLEM_MAIL_LINK);
    }

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={reportIssue} style={styles.container}>
            <Icon name={"bug-outline"} size={35} color={isThemeDark(theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.topText}>
                    Report An Issue
                </Text>
                <Text style={styles.bottomText}>
                    Tell us what's wrong with the app
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ReportIssue;

const getStyles = (state: RootStateOrAny): I_SettingsReportIssueStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_SettingsReportIssueStyles>({
        container: {
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5,
            marginTop: 25
        },
        icon: {
            marginLeft: 15,
            marginRight: 10
        },
        textContainer: {
            justifyContent: "center",
            alignItems: "flex-start",
            flex: 1
        },
        topText: {
            fontFamily: "CircularStd-Bold",
            fontSize: 16,
            paddingTop: 1,
            paddingBottom: 1,
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        bottomText: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontFamily: "CircularStd-Book",
            paddingTop: 1,
            paddingBottom: 1,
        }
    })
}