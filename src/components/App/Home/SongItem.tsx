import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SongSchema, SongItemStyles } from "./interfaces"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SongItem: React.FC<SongSchema> = ({ id, title, artist, cover }): JSX.Element => {

    const toggleOptions = (songId: string): void => {
        console.log("Options", songId)
    }

    const playSong = (songId: string): void => {
        console.log("Play", songId)
    }

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => playSong(id)} style={styles.container}>
            <Image source={cover} style={styles.cover} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <View style={styles.divider}></View>
                <Text style={styles.artist} numberOfLines={1}>{artist}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.85} onPress={() => toggleOptions(id)} style={styles.optionsIcon}>
                <Icon name={"dots-vertical"} size={25} color={"#333"} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default SongItem;

const styles = StyleSheet.create<SongItemStyles>({
    container: {
        paddingTop: 11,
        paddingBottom: 11,
        paddingRight: 11,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    coverContainer: {
        padding: 0
    },
    cover: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
        flex: 1
    },
    title: {
        fontFamily: "CircularStd-Book",
        color: "#333",
        fontSize: 20,
    },
    divider: {
        height: 5
    },
    artist: {
        fontFamily: "CircularStd-Book",
        color: "#333",
    },
    optionsIcon: {
        paddingLeft: 50,
        paddingRight: 0
    }
})