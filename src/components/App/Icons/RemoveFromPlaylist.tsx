import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootStateOrAny, useSelector } from 'react-redux';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import { isThemeDark } from '../../../util/theme';
import { I_RemoveFromPlaylistIconProps, I_RemoveFromPlaylistIconStyles } from './interfaces';

interface I_GlobalStateProps {
    theme: string;
}

const RemoveFromPlaylistIcon: React.FC<I_RemoveFromPlaylistIconProps> = ({executor}): JSX.Element => {
    const mountedRef: React.MutableRefObject<boolean> = useRef<boolean>(true);
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const [loading, setLoading] = useState<boolean>(false);
    const {theme}: I_GlobalStateProps = globalState;
    const styles: I_RemoveFromPlaylistIconStyles = getStyles(globalState);

    const removeFromPlaylist = async (): Promise<void> => {
        if(loading) return;
        setLoading(true);
        setTimeout(async () => {
            await executor();
            if(mountedRef.current){
                setLoading(false)
            }
        }, 50)
    }

    useEffect(() => {
        return () => {
            mountedRef.current = false
        }
    }, [])

    return (
        <TouchableOpacity activeOpacity={0.85} onPress={removeFromPlaylist} style={styles.addIcon}>
            {loading ? (
                <ActivityIndicator size={20} color={isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} />
            ) : (
                <Icon name={"remove-circle-outline"} size={25} color={isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} />
            )}
        </TouchableOpacity>
    )
}

export default RemoveFromPlaylistIcon;

const getStyles = (state: RootStateOrAny): I_RemoveFromPlaylistIconStyles => {
    return StyleSheet.create<I_RemoveFromPlaylistIconStyles>({
        addIcon: {
            paddingLeft: 50,
            paddingRight: 0
        }
    })
}