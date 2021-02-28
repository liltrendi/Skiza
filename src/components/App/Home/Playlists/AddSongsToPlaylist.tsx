import React, {useCallback} from 'react'
import { StyleSheet, FlatList } from 'react-native';
import { useRoute, Route } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, RootStateOrAny, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { DARK_THEME, LIGHT_THEME } from '../../../../constants/theme';
import { I_Playlist, I_SongSchema } from '../../../../controllers/music/interfaces';
import { isThemeDark } from '../../../../util/theme';
import AddToPlaylistIcon from '../../Icons/AddToPlaylist';
import { I_AddSongsToPlaylistProps, I_AddSongsToPlaylistStyles, I_RenderItemProps } from '../interfaces'
import SongItem from '../SongItem';
import { showToast } from '../../../../util/songs';
import { addSongToPlaylist } from '../../../../actions/music';

interface I_GlobalStateProps {
    currentSong: I_SongSchema | null;
    songs: I_SongSchema[];
    theme: string;
    playlists: I_Playlist[];
}

interface I_AdditionalProps {
    addSongToPlaylist: (state: RootStateOrAny, playlistId: string, songId: string) => Promise<void>;
}

type T_Props = I_AddSongsToPlaylistProps & I_AdditionalProps;

const AddSongsToPlaylist: React.FC<T_Props> = ({addSongToPlaylist}): JSX.Element => {
    const route: Route<string, {playlist: I_Playlist | undefined} | undefined> = useRoute();
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {songs, playlists}: I_GlobalStateProps = globalState;
    const styles: I_AddSongsToPlaylistStyles = getStyles(globalState);

    const routePlaylistId: string | undefined = route.params?.playlist?.id;
    let playlistFromState: I_Playlist | undefined = playlists.find((item: I_Playlist) => item.id === routePlaylistId);

    let songsNotInPlaylist: I_SongSchema[] = [];

    for(let song of songs){
        if(!(playlistFromState?.songs.includes(song.id))){
            songsNotInPlaylist.push(song);
        }
    }

    const addSong = async (songId: string): Promise<void> => {
        if(!playlistFromState){
            showToast("Something went wrong with this playlist. Please try again.");
            return;
        }

        await addSongToPlaylist(globalState, playlistFromState.id, songId);

        let songName: string | undefined = songs.find((song: I_SongSchema) => song.id === songId)?.title;
        showToast(`Added ${songName || "song"} to ${playlistFromState.name}`)
    }

    const flatListRenderer = useCallback(({item}: I_RenderItemProps) => {
        return (
            <SongItem id={item.id} title={item.title} author={item.author} cover={item.cover} ActionIcon={(): JSX.Element => <AddToPlaylistIcon executor={async () => await addSong(item.id)} />} />
        )
    }, []);
    
    const keyExtractor = useCallback((item: I_SongSchema) => item.id, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <FlatList
                data={songsNotInPlaylist}
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
        addSongToPlaylist: (state: RootStateOrAny, playlistId: string, songId: string) => dispatch(addSongToPlaylist(state, playlistId, songId))
    }
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddSongsToPlaylist)

const getStyles = (state: RootStateOrAny): I_AddSongsToPlaylistStyles => {
    const {currentSong: showingPlayerFooter, theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_AddSongsToPlaylistStyles>({
        safeAreaView: {
            justifyContent: undefined,
            alignItems: undefined,
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            marginBottom: showingPlayerFooter ? 60 : 0,
            paddingTop: 60,
            flex: 1,
        },
        flatlist: {}
    })
}