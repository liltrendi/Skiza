import React, { useCallback } from 'react'
import {useSelector} from "react-redux"
import { FlatList, StyleSheet } from 'react-native';
import SongItem from './SongItem';
import {I_SongListProps, I_RenderItemProps, I_SongListStyles} from "./interfaces"
import GenreCategories from './GenreCategories';
import { I_SongSchema, I_UniqueArtist } from '../../../controllers/music/interfaces';
import { RootStateOrAny } from 'react-redux';
import { getUniqueArtists } from '../../../util/songs';

interface I_GlobalStateProps {
    songs: I_SongSchema[];
}

const SongList: React.FC<I_SongListProps> = (): JSX.Element => {

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {songs: allSongs}: I_GlobalStateProps = globalState;
    const uniqueArtists: I_UniqueArtist[] = getUniqueArtists(allSongs);

    const ArtistsTopSection: React.FC<{index: number}> = ({index}): JSX.Element => {
        if(index === 0 && uniqueArtists.length > 2){
            return <GenreCategories uniqueArtists={uniqueArtists} />
        }
        return <React.Fragment />
    }

    const flatListRenderer = useCallback(({item, index}: I_RenderItemProps) => {
        return (
            <React.Fragment>
                <ArtistsTopSection index={index} />
                <SongItem id={item.id} title={item.title} author={item.author} cover={item.cover} />
            </React.Fragment>
        )
    }, []);
    
    const keyExtractor = useCallback((item: I_SongSchema) => item.id, []);

    const shouldMarginate: boolean = uniqueArtists.length < 3;

    const styles: I_SongListStyles = getStyles(globalState, shouldMarginate);

    return (
        <FlatList
            data={allSongs}
            renderItem={flatListRenderer}
            keyExtractor={keyExtractor}
            style={styles.flatList}
        />
    )
}

export default SongList;

const getStyles = (state: RootStateOrAny, shouldMarginate: boolean): I_SongListStyles => {
    return StyleSheet.create<I_SongListStyles>({
        flatList: {
            marginTop: shouldMarginate ? 15 : 0
        }
    })
}