import React, { useState } from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStateOrAny, useSelector } from 'react-redux';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import { isThemeDark } from '../../../util/theme';
import { I_AddToPlaylistIconProps, I_AddToPlaylistIconStyles } from './interfaces';

interface I_GlobalStateProps {
    theme: string;
}

const AddToPlaylistIcon: React.FC<I_AddToPlaylistIconProps> = ({executor}): JSX.Element => {
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const [loading, setLoading] = useState<boolean>(false);
    const {theme}: I_GlobalStateProps = globalState;
    const styles: I_AddToPlaylistIconStyles = getStyles(globalState);

    const addToPlaylist = async (): Promise<void> => {
        if(loading) return;
        setLoading(true);
        setTimeout(async () => {
            await executor();
            setLoading(false)
        }, 50)
    }

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={addToPlaylist} style={styles.addIcon}>
            {loading ? (
                <ActivityIndicator size={20} color={isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} />
            ) : (
                <Icon name={"plus"} size={25} color={isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} />
            )}
        </TouchableOpacity>
    )
}

export default AddToPlaylistIcon;

const getStyles = (state: RootStateOrAny): I_AddToPlaylistIconStyles => {
    return StyleSheet.create<I_AddToPlaylistIconStyles>({
        addIcon: {
            paddingLeft: 50,
            paddingRight: 0
        }
    })
}