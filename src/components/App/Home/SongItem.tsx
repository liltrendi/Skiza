import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { RootStateOrAny } from 'react-redux';
import { connect, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { I_SongItemProps, I_SongItemStyles } from "./interfaces"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setCurrentSong } from '../../../actions/music';
import { I_SongSchema } from '../../../controllers/music/interfaces';
import { MUSICAL_NOTE_IMAGE } from '../../../assets/images';
import { deduceCoverArtToUse } from '../../../util/songs';

interface I_AdditionalProps extends I_SongItemProps {
    setCurrentSong: (song: I_SongSchema | undefined) => Promise<void>;
}

type T_Props = I_SongItemProps & I_AdditionalProps;

const SongItem: React.FC<T_Props> = ({ id, title, author, cover, setCurrentSong }): JSX.Element => {

    const allSongs: I_SongSchema[] = useSelector((state: RootStateOrAny) => state.songs);
    const currentSong: null | I_SongSchema = useSelector((state: RootStateOrAny) => state.currentSong);

    const toggleOptions = (songId: string): void => {
        console.log("Options", songId)
    }

    const playSong = (songId: string): void => {
        const song: I_SongSchema | undefined = allSongs.find((item: I_SongSchema) => item.id === songId);
        console.log("Playing", song);
        setCurrentSong(song);
    }

    const isActive: boolean = currentSong ? currentSong.id === id : false;

    const styles: I_SongItemStyles = getStyles(isActive)

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={(): void => playSong(id)} style={styles.container}>
            <Image source={deduceCoverArtToUse(cover, MUSICAL_NOTE_IMAGE)} style={styles.cover} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <View style={styles.divider}></View>
                <Text style={styles.author} numberOfLines={1}>{author}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.85} onPress={(): void => toggleOptions(id)} style={styles.optionsIcon}>
                <Icon name={"dots-vertical"} size={25} color={"#333"} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
        setCurrentSong: (song: I_SongSchema | undefined) => dispatch(setCurrentSong(song))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SongItem)

const getStyles = (isActive: boolean | undefined): I_SongItemStyles => {
    return StyleSheet.create<I_SongItemStyles>({
        container: {
            justifyContent: "space-evenly",
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#888",
            borderWidth: 0.5,
            marginTop: 0,
            marginBottom: 15, 
            marginLeft: 16,
            marginRight: 16,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 10,
            paddingRight: 10

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
            fontFamily: "CircularStd-Book",
            fontWeight: "bold",
            color: isActive ? "#f05454" : "#333",
            fontSize: 18,
        },
        divider: {
            height: 5
        },
        author: {
            fontFamily: "CircularStd-Book",
            color: "#333",
        },
        optionsIcon: {
            paddingLeft: 50,
            paddingRight: 0
        }
    })
}
