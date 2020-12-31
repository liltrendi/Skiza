import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { Icon, Input, Item } from 'native-base'
import { StyleSheet, View } from 'react-native'
import {widthPercentageToDP as wdp} from 'react-native-responsive-screen';
import { I_BarProps, I_BarStyles } from './interfaces'
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';

interface I_GlobalStateProps {
    theme: string;
}

const Bar: React.FC<I_BarProps> = ({searchTerm, setSearchTerm}): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const onChangeText = (text: string): void => setSearchTerm(text)

    const styles: I_BarStyles = getStyles(globalState);
    return (
        <View style={styles.container}>
            <Item rounded style={styles.bar}>
                <Icon active name="search" style={styles.searchIcon} />
                <Input placeholder="Artists, songs or albums" onChangeText={onChangeText} value={searchTerm} placeholderTextColor={isThemeDark(globalState.theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} style={styles.input} />
            </Item>
        </View>
    )
}

export default Bar

const getStyles = (state: RootStateOrAny): I_BarStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_BarStyles>({
        container: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            paddingTop: 20,
            paddingBottom: 20
        },
        bar: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            marginRight: wdp("5%"),
            marginLeft: wdp("5%"),
            top: 0
        },
        searchIcon: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        input: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        }
    })
}
