import React, { useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { RootStateOrAny, useSelector } from 'react-redux';
import {I_PlaylistProps, I_PlaylistStyles, I_RenderItemProps} from "./interfaces"
import { I_Playlist, I_SongSchema } from '../../../../controllers/music/interfaces';
import SongItem from '../SongItem';
import { useRoute, Route } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isThemeDark } from '../../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../../constants/theme';
import NoSongsInPlaylist from '../../Errors/Home/NoSongsInPlaylist';
import SongItemOptionsIcon from '../../Icons/SongItemOptions';

interface I_GlobalStateProps {
    playlists: I_Playlist[];
    songs: I_SongSchema[];
    currentSong: I_SongSchema | null;
    theme: string;
}

const Playlist: React.FC<I_PlaylistProps> = (): JSX.Element => {
    const route: Route<string, {id: string} | undefined> = useRoute();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {playlists, songs}: I_GlobalStateProps = globalState;
    const styles = getStyles(globalState);

    const toggleOptions = (songId: string): void => {
        console.log("Options", songId)
    }

    const flatListRenderer = useCallback(({item}: I_RenderItemProps) => {
        return (
            <SongItem id={item.id} title={item.title} author={item.author} cover={item.cover} ActionIcon={(): JSX.Element => <SongItemOptionsIcon executor={() => toggleOptions(item.id)} />} />
        )
    }, []);
    
    const keyExtractor = useCallback((item: I_SongSchema) => item.id, []);

    const playlistId: string | undefined = route.params?.id;

    const playlist: I_Playlist | undefined = playlists.find((item: I_Playlist) => item.id === playlistId);

    let playlistSongs: I_SongSchema[] = [];

    if(playlist){
        for(let songId of playlist.songs){
            let actualSong: I_SongSchema | undefined = songs.find((item: I_SongSchema) => item.id === songId);
            if(actualSong){
                playlistSongs.push(actualSong);
            }
        }
    }

    if(!playlist){
        return <NoSongsInPlaylist playlist={playlist} />
    }

    if(playlistSongs.length < 1){
        return <NoSongsInPlaylist playlist={playlist} />
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <FlatList
                data={playlistSongs}
                renderItem={flatListRenderer}
                keyExtractor={keyExtractor}
                style={styles.flatlist}
            />
        </SafeAreaView>
    )
}

export default Playlist;

const getStyles = (state: RootStateOrAny): I_PlaylistStyles => {
    let storagePermissionStatus: string = state.readExternalStoragePermission;
    const {currentSong: showingPlayerFooter, theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_PlaylistStyles>({
        safeAreaView: {
            justifyContent: storagePermissionStatus === "granted" ? undefined : "center",
            alignItems: storagePermissionStatus === "granted" ? undefined : "center",
            marginBottom: showingPlayerFooter ? 60 : 0,
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            paddingTop: 60,
            flex: 1,
        },
        flatlist: {

        }
    })
}