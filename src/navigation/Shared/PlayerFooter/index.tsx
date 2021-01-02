import React from 'react'
import { useSelector, RootStateOrAny, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {I_PlayerFooterProps, I_PlayerFooterStyles} from "./interfaces"
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import Icon from 'react-native-vector-icons/Feather';
import { I_SongSchema } from '../../../controllers/music/interfaces';
import { deduceCoverArtToUse } from '../../../util/songs';
import { MUSICAL_NOTE_IMAGE } from '../../../assets/images';
import { isNullUndefined } from '../../../util/util';
import { setSongPlayingStatus, togglePlayerModal } from '../../../actions/music';

interface I_GlobalStateProps {
    theme: string;
    currentSong: I_SongSchema | null | undefined;
    isPlaying: boolean;
    showPlayerModal: boolean;
}

interface I_AdditionalProps extends I_PlayerFooterProps {
    setSongPlayingStatus: (song: I_SongSchema | undefined | null, status: boolean) => Promise<void>;
    togglePlayerModal: (show: boolean) => Promise<void>;
}

type T_Props = I_PlayerFooterProps & I_AdditionalProps;

const PlayerFooter: React.FC<T_Props> = ({setSongPlayingStatus, togglePlayerModal}): JSX.Element => {

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {currentSong, theme, isPlaying, showPlayerModal}: I_GlobalStateProps = globalState;
    const styles: I_PlayerFooterStyles = getStyles(globalState);

    const togglePlay = (): void => {
        setSongPlayingStatus(currentSong, true);
    }

    const togglePause = (): void => {
        setSongPlayingStatus(currentSong, false);
    }

    const toggleModal = (): void => {
        togglePlayerModal(!showPlayerModal)
    }

    if(isNullUndefined(currentSong)){
        return <React.Fragment />
    }

    return (
        <TouchableOpacity activeOpacity={1} style={styles.container} onPress={toggleModal}>
            <Image source={deduceCoverArtToUse(currentSong?.cover || "", MUSICAL_NOTE_IMAGE)} style={styles.thumbnail} />
            <View style={styles.textContainer}>
                <Text style={styles.topText} numberOfLines={1}>
                    {currentSong?.title}
                </Text>
                <Text style={styles.bottomText} numberOfLines={1}>
                    {currentSong?.author}
                </Text>
            </View>
            <Icon name={isPlaying ? "pause" : "play"} size={32} color={isThemeDark(theme) ? DARK_THEME.brightColor : LIGHT_THEME.primaryTxt} style={styles.icon} onPress={isPlaying ? togglePause : togglePlay} />
        </TouchableOpacity>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        setSongPlayingStatus: (song: I_SongSchema | undefined | null, status: boolean) => dispatch(setSongPlayingStatus(song, status)),
        togglePlayerModal: (show: boolean) => dispatch(togglePlayerModal(show))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerFooter)

const getStyles = (state: RootStateOrAny): I_PlayerFooterStyles => {
    const {theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_PlayerFooterStyles>({
        container: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.secondaryBg : LIGHT_THEME.secondaryBg,
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            paddingLeft: 15,
            bottom: 47,
            height: 60,
            right: 0,
            left: 0,
        },
        thumbnail: {
            borderBottomRightRadius: 350,
            borderBottomLeftRadius: 350,
            borderTopRightRadius: 350,
            borderTopLeftRadius: 350,
            resizeMode: 'contain',
            height: 40,
            width: 40,
            marginLeft: 5,
            marginRight: 15
        },
        textContainer: {
            justifyContent: "center",
            alignItems: "flex-start",
            flex: 1
        },
        topText: {
            fontFamily: "CircularStd-Bold",
            fontSize: 16,
            paddingBottom: 3,
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt
        },
        bottomText: {
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
            paddingTop: 0,
            paddingBottom: 1,
            fontFamily: "CircularStd-Book",
        },
        icon: {
            marginLeft: 15,
            marginRight: 12
        }
    })
}