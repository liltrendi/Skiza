import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { ISongSchema, ISongItemStyles } from "./interfaces"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SongItem: React.FC<ISongSchema> = ({ id, title, author, cover, isActive }): JSX.Element => {

    const toggleOptions = (songId: string): void => {
        console.log("Options", songId)
    }

    const playSong = (songId: string): void => {
        console.log("Play", songId)
    }

    const styles: ISongItemStyles = getStyles(isActive)

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={() => playSong(id)} style={styles.container}>
            <Image source={cover} style={styles.cover} />
            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <View style={styles.divider}></View>
                <Text style={styles.author} numberOfLines={1}>{author}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.85} onPress={() => toggleOptions(id)} style={styles.optionsIcon}>
                <Icon name={"dots-vertical"} size={25} color={"#333"} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default SongItem;

const getStyles = (isActive: boolean): ISongItemStyles => {
    return StyleSheet.create<ISongItemStyles>({
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
