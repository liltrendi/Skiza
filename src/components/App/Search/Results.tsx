import React, { useCallback } from 'react'
import LottieView from 'lottie-react-native';
import {StyleSheet, View, Text, FlatList} from "react-native"
import { isEmptyArray, isEmptyString } from '../../../util/util'
import { SearchResultsProps, SearchResultsStyles } from './interfaces'
import {RenderItemProps} from "./../Home/interfaces"
import SongItem from './../Home/SongItem';
 
const SearchResults: React.FC<SearchResultsProps> = ({searchTerm, matchedSongs}):JSX.Element => {

    const noSongsAnimation = require('./../../../assets/animations/home/not-found.json');

    const flatListRenderer = useCallback(({item}: RenderItemProps) => {
        const placeholderImage: any = require("./../../../assets/images/musical-note.jpg");
        return (
            <SongItem id={item.id} title={item.title} author={item.author} cover={isEmptyString(item.cover) ? placeholderImage : item.cover} />
        )
    }, []);
    
    const keyExtractor = useCallback((item) => item.id, []);

    if(isEmptyArray(matchedSongs)){
        return (
            <View style={styles.container}>
                <LottieView
                    source={noSongsAnimation}
                    style={styles.LottieView}
                    autoPlay={true}
                />
                <Text style={styles.noResultsText}>
                    No results found for <Text style={styles.searchTerm}>{searchTerm}</Text>
                </Text>
            </View>
        )
    }

    return (
        <FlatList
            data={matchedSongs}
            renderItem={flatListRenderer}
            keyExtractor={keyExtractor}
            style={styles.songList}
        />
    )
}

export default SearchResults

const styles = StyleSheet.create<SearchResultsStyles>({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    LottieView: {
        height: 80,
        width: 80,
        marginBottom: 10
    },
    noResultsText: {
        fontFamily: "CircularStd-Book",
        fontSize: 15,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: "center"
    },
    searchTerm: {
        fontWeight: "bold"
    },
    songList: {
        marginTop: 85
    }
})