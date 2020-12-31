import { StyleProp, ViewStyle } from "react-native";
import { RootStateOrAny } from "react-redux";
import { DARK_THEME, LIGHT_THEME, SHARED_THEME } from "../../../../constants/theme";
import { isThemeDark } from "../../../../util/theme";

interface I_TabBarOptionsProps {
    activeTintColor: string;
    inactiveTintColor: string;
    showLabel: boolean;
    keyboardHidesTabBar: boolean;
    style: StyleProp<ViewStyle>;
}

interface I_GlobalStateProps {
    theme: string;
}

export const tabBarOptions = (state: RootStateOrAny): I_TabBarOptionsProps => {
    const {theme}: I_GlobalStateProps = state;
    return {
        activeTintColor: isThemeDark(theme) ? SHARED_THEME.brightTextLv2 : SHARED_THEME.brightTextLv1,
        inactiveTintColor: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
        showLabel: false,
        keyboardHidesTabBar: false,
        style: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.secondaryBg : LIGHT_THEME.secondaryBg
        }
    };
}