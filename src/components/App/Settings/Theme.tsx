import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Switch } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { I_SettingsThemeProps, I_SettingsThemeStyles } from './interfaces';
import { switchTheme } from '../../../actions/theme';
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';

interface I_GlobalStateProps {
    theme: string;
}

const Theme: React.FC<I_SettingsThemeProps> = ({}): JSX.Element => {
    const dispatch = useDispatch();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {theme}: I_GlobalStateProps = globalState;
    const styles: I_SettingsThemeStyles = getStyles(globalState);

    const changeTheme = (): void => {
        let switchTo: string = isThemeDark(theme) ? "LIGHT" : "DARK";
        dispatch(switchTheme(switchTo));
    }

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={changeTheme} style={styles.container}>
            <Icon name={isThemeDark(theme) ? "moon" : "sun"} size={35} color={isThemeDark(theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.topText}>
                    {isThemeDark(theme) ? "Dark" : "Light"} Mode
                </Text>
                <Text style={styles.bottomText}>
                    Change the app's theme to {isThemeDark(theme) ? "dark" : "light"}
                </Text>
            </View>
            <Switch
                trackColor={{ false: "#3e3e3e", true: "#3e3e3e" }}
                thumbColor={isThemeDark(theme) ? "#f05454" : "#f4f3f4"}
                value={isThemeDark(theme)}
                onValueChange={changeTheme}
                style={styles.switch}
            />
        </TouchableOpacity>
    )
}

export default Theme;

const getStyles = (state: RootStateOrAny): I_SettingsThemeStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_SettingsThemeStyles>({
        container: {
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 5
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
        },
        switch: {
            marginRight: 5,
        }
    })
}