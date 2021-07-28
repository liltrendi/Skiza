import React, { useCallback } from 'react'
import { FlatList, StyleSheet } from 'react-native';
import { connect, RootStateOrAny, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {I_PlaylistProps, I_PlaylistStyles, I_RenderItemProps} from "./interfaces"
import { I_Playlist, I_SongSchema } from '../../../../controllers/music/interfaces';
import SongItem from '../SongItem';
import { useRoute, Route } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { isThemeDark } from '../../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../../constants/theme';
import NoSongsInPlaylist from '../../Errors/Home/NoSongsInPlaylist';
import SongItemOptionsIcon from '../../Icons/SongItemOptions';
import RemoveFromPlaylistIcon from '../../Icons/RemoveFromPlaylist';
import { removeSongFromPlaylist } from '../../../../actions/music';

interface I_GlobalStateProps {
    playlists: I_Playlist[];
    songs: I_SongSchema[];
    currentSong: I_SongSchema | null;
    theme: string;
}

interface I_AdditionalProps {
    removeSongFromPlaylist: (state: RootStateOrAny, playlistId: string, songId: string) => Promise<void>;
}

type T_Props = I_PlaylistProps & I_AdditionalProps;

const Playlist: React.FC<T_Props> = ({removeSongFromPlaylist}): JSX.Element => {
    const route: Route<string, {id: string} | undefined> = useRoute();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {playlists, songs}: I_GlobalStateProps = globalState;
    const styles = getStyles(globalState);

    const playlistId: string | undefined = route.params?.id;

    const toggleOptions = async (songId: string): Promise<void> => {
        console.log("Options", songId)
    }

    const removeFromPlaylist = async (songId: string): Promise<void> => {
        await removeSongFromPlaylist(globalState, playlistId || "", songId);
    }

    const OptionsAndRemoveIcons: React.FC<{songId: string}> = ({songId}): JSX.Element => {
        return (
            <React.Fragment>
                <RemoveFromPlaylistIcon executor={() => removeFromPlaylist(songId)} />
                <SongItemOptionsIcon executor={() => toggleOptions(songId)} iconStyles={{paddingLeft: 15}} />
            </React.Fragment>
        )
    }

    const flatListRenderer = useCallback(({item}: I_RenderItemProps) => {
        return (
            <SongItem id={item.id} title={item.title} author={item.author} cover={item.cover}  path={item.path} ActionIcon={(): JSX.Element => <OptionsAndRemoveIcons songId={item.id} />} />
        )
    }, []);
    
    const keyExtractor = useCallback((item: I_SongSchema) => item.id, []);

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

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        removeSongFromPlaylist: (state: RootStateOrAny, playlistId: string, songId: string) => dispatch(removeSongFromPlaylist(state, playlistId, songId))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlist)

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