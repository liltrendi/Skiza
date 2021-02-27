import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStateOrAny, useSelector } from 'react-redux';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import { I_Playlist, I_SongSchema } from '../../../controllers/music/interfaces';
import { isThemeDark } from '../../../util/theme';
import NoPlaylists from '../Errors/Home/NoPlaylists';
import { I_PlaylistsProps, I_PlaylistsStyles } from './interfaces';

interface I_GlobalStateProps {
    songs: I_SongSchema[];
    theme: string;
    playlists: I_Playlist[];
}

const Playlists: React.FC<I_PlaylistsProps> = (): JSX.Element => {
    const navigation = useNavigation();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {playlists}: I_GlobalStateProps = globalState;
    const styles: I_PlaylistsStyles = getStyles(globalState);

    if(playlists.length < 1){
        return (
            <NoPlaylists />
        )
    }

    return (
        <ScrollView
            scrollEventThrottle={16}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            horizontal={false}
        >
            <TouchableOpacity style={styles.createPlaylist} onPress={() => navigation.navigate("CreatePlaylist")}>
                <Icon name={"plus"} size={25} color={isThemeDark(globalState.theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} />
                <Text style={styles.createPlaylistText}>
                    Create Playlist
                </Text>
            </TouchableOpacity>
            {playlists.map((playlist) => {
                return (
                    <TouchableOpacity key={playlist.id} style={styles.playlist} onPress={() => navigation.navigate("Playlist", {id: playlist.id})}>
                        <Text style={styles.playlistName}>
                            {playlist.name}
                        </Text>
                        <Text style={styles.songCount}>
                            {playlist.songs.length} songs
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default Playlists;

const getStyles = (state: RootStateOrAny): I_PlaylistsStyles => {
    const theme: string = state.theme;
    return StyleSheet.create<I_PlaylistsStyles>({
        container: {
            
        },
        createPlaylist: {
            paddingBottom: 10,
            paddingHorizontal: 25,
            paddingTop: 20,
            flexDirection: "row",
            alignItems: "center",
        },
        createPlaylistText: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontFamily: "CircularStd-Bold",
            marginLeft: 5
        },
        playlist: {
            paddingBottom: 20,
            paddingHorizontal: 25,
            paddingTop: 20,
        },
        playlistName: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontFamily: "CircularStd-Bold",
        },
        songCount: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            fontFamily: "CircularStd-Book",
            marginTop: 5
        }
    })
}