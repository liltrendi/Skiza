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
import { isThemeDark } from '../../../util/theme';
import { DARK_THEME, LIGHT_THEME } from '../../../constants/theme';
import SongItemOptionsIcon from '../Icons/SongItemOptions';

interface I_GlobalStateProps {
    currentSong: null | I_SongSchema;
    theme: string;
}
 
const SearchResults: React.FC<I_SearchResultsProps> = ({searchTerm, matchedSongs}):JSX.Element => {
 
    const noSongsAnimation = HOME_NOT_FOUND_ANIMATION;
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);

    const toggleOptions = (songId: string): void => {
        console.log("Options", songId)
    }

    const flatListRenderer = useCallback(({item}: I_RenderItemProps) => {
        return (
            <SongItem id={item.id} title={item.title} author={item.author} cover={item.cover} ActionIcon={(): JSX.Element => <SongItemOptionsIcon executor={() => toggleOptions(item.id)} />} />
        )
    }, []);
    
    const keyExtractor = useCallback((item: I_SongSchema) => item.id, []);

    const styles = getStyles(globalState);

    if(isEmptyArray(matchedSongs)){
        return (
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <LottieView
                        source={noSongsAnimation}
                        style={styles.LottieView}
                        autoPlay={true}
                    />
                    <Text style={styles.noResultsText}>
                        No results found for <Text style={styles.searchTerm}>{searchTerm}</Text>
                    </Text>
                </View>
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

const getStyles = (state: RootStateOrAny): I_SearchResultsStyles => {
    const {currentSong: showingPlayerFooter, theme}: I_GlobalStateProps = state;
    return StyleSheet.create<I_SearchResultsStyles>({
        container: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            justifyContent: "center",
            alignItems: "center",
            flex: 1
        },
        innerContainer: {
            marginTop: -50,
            alignItems: "center",
            justifyContent: "center"
        },
        LottieView: {
            height: 80,
            width: 80,
            marginBottom: 5,
        },
        noResultsText: {
            fontFamily: "CircularStd-Book",
            fontSize: 15,
            paddingLeft: 20,
            paddingRight: 20,
            textAlign: "center",
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
        },
        searchTerm: {
            fontFamily: "CircularStd-Bold",
            color: isThemeDark(theme) ? DARK_THEME.primaryTxt : LIGHT_THEME.primaryTxt,
        },
        songList: {
            backgroundColor: isThemeDark(theme) ? DARK_THEME.primaryBg : LIGHT_THEME.primaryBg,
            marginBottom: showingPlayerFooter ? 60 : 0,
            paddingTop: 5,
        }
    })
}