import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Switch } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { I_SettingsThemeProps, I_SettingsThemeStyles } from './interfaces';
import { switchTheme } from '../../../actions/theme';

interface I_GlobalStateProps {
    theme: string;
}

const Theme: React.FC<I_SettingsThemeProps> = ({}): JSX.Element => {
    const dispatch = useDispatch();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {theme}: I_GlobalStateProps = globalState;
    const styles: I_SettingsThemeStyles = getStyles(globalState);

    const changeTheme = (): void => {
        let switchTo: string = theme === "LIGHT" ? "DARK" : "LIGHT";
        dispatch(switchTheme(switchTo));
    }

    const isThemeDark = ((): boolean => theme === "DARK")();

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={changeTheme} style={styles.container}>
            <Icon name={isThemeDark ? "moon" : "sun"} size={35} color={"#333"} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.topText}>
                    {isThemeDark ? "Dark" : "Light"} Mode
                </Text>
                <Text style={styles.bottomText}>
                    Change the app's theme to {isThemeDark ? "dark" : "light"}
                </Text>
            </View>
            <Switch
                trackColor={{ false: "#3e3e3e", true: "#3e3e3e" }}
                thumbColor={isThemeDark ? "#f05454" : "#f4f3f4"}
                value={isThemeDark}
                onValueChange={changeTheme}
                style={styles.switch}
            />
        </TouchableOpacity>
    )
}

export default Theme;

const getStyles = (state: RootStateOrAny): I_SettingsThemeStyles => {
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
            fontFamily: "CircularStd-Book",
            fontWeight: "bold",
            fontSize: 16,
            paddingTop: 1,
            paddingBottom: 1,
        },
        bottomText: {
            paddingTop: 1,
            paddingBottom: 1,
        },
        switch: {
            marginRight: 5,
        }
    })
}