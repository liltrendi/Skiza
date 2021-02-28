import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStateOrAny, useSelector } from 'react-redux';
import { I_Playlist, I_SongSchema } from '../../../../controllers/music/interfaces';
import { I_NoSongsInPlaylistProps, I_NoSongsInPlaylistStyles } from './interfaces'
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

const NoSongsInPlaylist: React.FC<I_NoSongsInPlaylistProps> = ({playlist}): JSX.Element => {

    const noSongsAnimation = HOME_NOT_FOUND_ANIMATION;
    const navigation = useNavigation();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const styles: I_NoSongsInPlaylistStyles = getStyles(globalState);

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <LottieView
                    source={noSongsAnimation}
                    style={styles.LottieView}
                    autoPlay={true}
                />
                <Text style={styles.screenText}>
                    Whoops, nothing to see here.
                </Text>
                {playlist ? (
                    <Text style={styles.screenText}>
                        Add songs to <Text style={styles.playlistName}>{playlist.name}</Text>.
                    </Text>
                ) : (
                    <React.Fragment />
                )}
                <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={() => playlist ? navigation.navigate("AddSongsToPlaylist", {playlist}) : navigation.goBack()}>
                    <Text style={styles.buttonText}>
                        {playlist ? "Let's Go" : "Go Back"}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NoSongsInPlaylist;

const getStyles = (state: RootStateOrAny): I_NoSongsInPlaylistStyles => {
    const {theme, currentSong}: I_GlobalStateProps = state;

    return StyleSheet.create<I_NoSongsInPlaylistStyles>({
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
        playlistName: {
            fontFamily: "CircularStd-Bold",
            fontSize: 15
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