import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStateOrAny, useSelector } from 'react-redux';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import { isThemeDark } from '../../../util/theme';
import { I_SongItemOptionsIconProps, I_SongItemOptionsIconStyles } from './interfaces';

interface I_GlobalStateProps {
    theme: string;
}

const SongItemOptionsIcon: React.FC<I_SongItemOptionsIconProps> = ({executor}): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {theme}: I_GlobalStateProps = globalState;
    const styles: I_SongItemOptionsIconStyles = getStyles(globalState);

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={executor} style={styles.addIcon}>
            <Icon name={"dots-vertical"} size={25} color={isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} />
        </TouchableOpacity>
    )
}

export default SongItemOptionsIcon;

const getStyles = (state: RootStateOrAny): I_SongItemOptionsIconStyles => {
    return StyleSheet.create<I_SongItemOptionsIconStyles>({
        addIcon: {
            paddingLeft: 50,
            paddingRight: 0
        }
    })
}