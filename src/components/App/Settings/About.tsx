import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { RootStateOrAny,  useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { I_SettingsAboutAppProps, I_SettingsAboutAppStyles } from './interfaces';
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';

interface I_GlobalStateProps {
    theme: string;
}

const AboutApp: React.FC<I_SettingsAboutAppProps> = ({}): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {theme}: I_GlobalStateProps = globalState;
    const styles: I_SettingsAboutAppStyles = getStyles(globalState);

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={() => {}} style={styles.container}>
            <Icon name={"info"} size={35} color={isThemeDark(theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.topText}>
                    App Info
                </Text>
                <Text style={styles.bottomText}>
                    Learn more about Skiza
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default AboutApp;

const getStyles = (state: RootStateOrAny): I_SettingsAboutAppStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_SettingsAboutAppStyles>({
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