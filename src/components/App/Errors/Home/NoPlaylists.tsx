import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStateOrAny, useSelector } from 'react-redux';
import { I_Playlist, I_SongSchema } from '../../../../controllers/music/interfaces';
import { I_NoPlaylistsProps, I_NoPlaylistsStyles } from './interfaces'
import { HOME_NOT_FOUND_ANIMATION } from '../../../../assets/animations';
import { isThemeDark } from '../../../../util/theme';
import { DARK_THEME, LIGHT_THEME, SHARED_THEME } from '../../../../constants/theme';
import { useNavigation } from '@react-navigation/native';

interface I_GlobalStateProps {
    theme: string;
    songs: I_SongSchema[];
    currentSong: I_SongSchema;
    playlists: I_Playlist[];
}

const NoPlaylists: React.FC<I_NoPlaylistsProps> = (): JSX.Element => {

    const noSongsAnimation = HOME_NOT_FOUND_ANIMATION;
    const navigation = useNavigation();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {playlists}: I_GlobalStateProps = globalState;
    const styles: I_NoPlaylistsStyles = getStyles(globalState);

    if(playlists.length > 0){
        return <React.Fragment />
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <LottieView
                    source={noSongsAnimation}
                    style={styles.LottieView}
                    autoPlay={true}
                />
                <Text style={styles.screenText}>
                    Whoa, it's a little deserted here.
                </Text>
                <Text style={styles.screenText}>
                    Start by making your own playlists now.
                </Text>
                <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => navigation.navigate("CreatePlaylist")}>
                    <Text style={styles.buttonText}>Create Playlist</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NoPlaylists;

const getStyles = (state: RootStateOrAny): I_NoPlaylistsStyles => {
    const {theme, currentSong}: I_GlobalStateProps = state;

    return StyleSheet.create<I_NoPlaylistsStyles>({
        safeAreaContainer: {
            justifyContent: undefined,
            alignItems: undefined,
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            marginBottom: currentSong ? 60 : 0,
            flex: 1,
        },
        container: {
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        },
        LottieView: {
            height: 80,
            width: 80,
            marginBottom: 10
        },
        screenText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            paddingLeft: 20,
            paddingRight: 20,
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        button: {
            alignItems: "center",
            backgroundColor: isThemeDark(theme) ? SHARED_THEME.brightTextLv2 : SHARED_THEME.brightTextLv2,
            padding: 14,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            marginTop: 20
        },
        buttonText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            color: isThemeDark(theme) ? SHARED_THEME.lightTextLv1 : SHARED_THEME.lightTextLv1
        }
    })
}