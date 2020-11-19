import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SongSchema, SongItemStyles } from "./interfaces"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SongItem: React.FC<SongSchema> = ({ id, title, artist, cover, isActive }): JSX.Element => {

    const toggleOptions = (songId: string): void => {
        console.log("Options", songId)
    }

    const playSong = (songId: string): void => {
        console.log("Play", songId)
    }

    const styles: SongItemStyles = getStyles(isActive)

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

const getStyles = (isActive: boolean): SongItemStyles => {
    return StyleSheet.create<SongItemStyles>({
        container: {
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 11,
            paddingRight: 11,
            paddingTop: 11,
            paddingLeft: 2,
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
        artist: {
            fontFamily: "CircularStd-Book",
            color: "#333",
        },
        optionsIcon: {
            paddingLeft: 50,
            paddingRight: 0
        }
    })
}
