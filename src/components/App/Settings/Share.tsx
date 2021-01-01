import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { RootStateOrAny,  useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
import { I_SettingsShareAppProps, I_SettingsShareAppStyles } from './interfaces';
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import { SHARE_APP_MESSAGE } from '../../../constants/settings';

interface I_GlobalStateProps {
    theme: string;
}

const ShareApp: React.FC<I_SettingsShareAppProps> = ({}): JSX.Element => {

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {theme}: I_GlobalStateProps = globalState;
    const styles: I_SettingsShareAppStyles = getStyles(globalState);

    const shareAppLink = async (): Promise<void> => {
        await Share.open({message: SHARE_APP_MESSAGE});
    }

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={shareAppLink} style={styles.container}>
            <Icon name={"share-social-outline"} size={35} color={isThemeDark(theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt} style={styles.icon} />
            <View style={styles.textContainer}>
                <Text style={styles.topText}>
                    Share Skiza
                </Text>
                <Text style={styles.bottomText}>
                    Make other people discover the app
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ShareApp;

const getStyles = (state: RootStateOrAny): I_SettingsShareAppStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_SettingsShareAppStyles>({
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
            fontFamily: "CircularStd-Book",
            fontWeight: "bold",
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