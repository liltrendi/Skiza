import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'
import {I_PlayerFooterProps, I_PlayerFooterStyles} from "./interfaces"
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';

interface I_GlobalStateProps {
    theme: string;
}

const PlayerFooter: React.FC<I_PlayerFooterProps> = (): JSX.Element => {

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_PlayerFooterStyles = getStyles(globalState);
    return (
        <View style={styles.container}>
            <Text>Player</Text>
        </View>
    )
}

const getStyles = (state: RootStateOrAny): I_PlayerFooterStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_PlayerFooterStyles>({
        container: {
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            backgroundColor: isThemeDark(theme) ? DARK_THEME.secondaryBg : LIGHT_THEME.secondaryBg,
            paddingLeft: 15,
            bottom: 47,
            height: 60,
            right: 0,
            left: 0,
        }
    })
}

export default PlayerFooter