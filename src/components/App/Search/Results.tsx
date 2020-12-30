import React, { useCallback } from 'react'
import LottieView from 'lottie-react-native';
import {StyleSheet, View, Text, FlatList} from "react-native"
import { isEmptyArray } from '../../../util/util'
import { I_SearchResultsProps, I_SearchResultsStyles } from './interfaces'
import {I_RenderItemProps} from "./../Home/interfaces"
import SongItem from './../Home/SongItem';
import { I_SongSchema } from '../../../controllers/music/interfaces';
import { HOME_NOT_FOUND_ANIMATION } from '../../../assets/animations';
import { RootStateOrAny, useSelector } from 'react-redux';
 
const SearchResults: React.FC<I_SearchResultsProps> = ({searchTerm, matchedSongs}):JSX.Element => {
 
    const noSongsAnimation = HOME_NOT_FOUND_ANIMATION;
    const currentSong: null | I_SongSchema = useSelector((state: RootStateOrAny) => state.currentSong);

    const flatListRenderer = useCallback(({item}: I_RenderItemProps) => {
        return (
            <SongItem id={item.id} title={item.title} author={item.author} cover={item.cover} />
        )
    }, []);
    
    const keyExtractor = useCallback((item: I_SongSchema) => item.id, []);

    const styles = getStyles(currentSong);

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

const getStyles = (showingPlayerFooter: null | I_SongSchema): I_SearchResultsStyles => {
    return StyleSheet.create<I_SearchResultsStyles>({
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
            marginTop: 85,
            marginBottom: showingPlayerFooter ? 60 : 0
        }
    })
}