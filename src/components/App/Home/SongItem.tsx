import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { RootStateOrAny } from 'react-redux';
import { connect, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { I_SongItemProps, I_SongItemStyles } from "./interfaces"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setCurrentSong, setSongPlayingStatus, setSongQueue } from '../../../actions/music';
import { I_SongSchema } from '../../../controllers/music/interfaces';
import { MUSICAL_NOTE_IMAGE } from '../../../assets/images';
import { deduceCoverArtToUse } from '../../../util/songs';
import { DARK_THEME, LIGHT_THEME, SHARED_THEME } from '../../../constants/theme';
import { isThemeDark } from '../../../util/theme';
import { I_SongStateInitialProps } from '../../../reducers/player/songState';

interface I_AdditionalProps extends I_SongItemProps {
    setCurrentSong: (song: I_SongSchema | undefined, state: RootStateOrAny) => Promise<void>;
    setSongPlayingStatus: (song: I_SongSchema | undefined, status: boolean) => Promise<void>;
    setSongQueue: (song: I_SongSchema | undefined, songs: I_SongSchema[], shuffle: boolean) => Promise<void>;
}

type T_Props = I_SongItemProps & I_AdditionalProps;

interface I_GlobalStateProps {
    songs: I_SongSchema[]; 
    currentSong: null | I_SongSchema;
    theme: string;
    songState: I_SongStateInitialProps;
}

const SongItem: React.FC<T_Props> = ({ id, title, author, cover, setCurrentSong, setSongPlayingStatus, setSongQueue }): JSX.Element => {

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {songs: allSongs, currentSong, theme, songState}: I_GlobalStateProps = globalState;

    const toggleOptions = (songId: string): void => {
        console.log("Options", songId)
    }

    const playSong = (songId: string): void => {
        const song: I_SongSchema | undefined = allSongs.find((item: I_SongSchema) => item.id === songId);
        setCurrentSong(song, globalState);
        setSongPlayingStatus(song, true)
        setSongQueue(song, allSongs, songState.shuffling);
    }

    const styles: I_SongItemStyles = getStyles(globalState, id);

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={(): void => playSong(id)} style={styles.container}>
            <Image source={deduceCoverArtToUse(cover, MUSICAL_NOTE_IMAGE)} style={styles.cover} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <View style={styles.divider}></View>
                <Text style={styles.author} numberOfLines={1}>{author}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.85} onPress={(): void => toggleOptions(id)} style={styles.optionsIcon}>
                <Icon name={"dots-vertical"} size={25} color={isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        setCurrentSong: (song: I_SongSchema | undefined, state: RootStateOrAny) => dispatch(setCurrentSong(song, state)),
        setSongPlayingStatus: (song: I_SongSchema | undefined, status: boolean) => dispatch(setSongPlayingStatus(song, status)),
        setSongQueue: (song: I_SongSchema | undefined, songs: I_SongSchema[], shuffle: boolean) => dispatch(setSongQueue(song, songs, shuffle))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongItem)

const getStyles = (state: RootStateOrAny, songId: string): I_SongItemStyles => {
    const {theme, currentSong}: I_GlobalStateProps = state;
    const isActive: boolean = currentSong ? currentSong.id === songId : false;
    return StyleSheet.create<I_SongItemStyles>({
        container: {
            borderColor: isThemeDark(theme) ? DARK_THEME.lightBorder : LIGHT_THEME.darkBorder,
            justifyContent: "space-evenly",
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 10,
            paddingRight: 10,
            paddingLeft: 10,
            paddingTop: 10,
            marginBottom: 10, 
            borderWidth: 0,
            marginRight: 5,
            marginLeft: 5,
            marginTop: 0,

        },
        coverContainer: {
            padding: 0
        },
        cover: {
            marginRight: 10,
            marginLeft: 10,
            height: 50,
            width: 50,
        },
        textContainer: {
            justifyContent: "center",
            alignItems: "flex-start",
            flex: 1
        },
        title: {
            fontFamily: "CircularStd-Bold",
            color: isActive ? SHARED_THEME.brightTextLv2 : (isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt),
            fontSize: 18,
        },
        divider: {
            height: 5
        },
        author: {
            fontFamily: "CircularStd-Book",
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
        },
        optionsIcon: {
            paddingLeft: 50,
            paddingRight: 0
        }
    })
}
