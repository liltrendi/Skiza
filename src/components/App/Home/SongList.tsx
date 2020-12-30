import React, { useCallback } from 'react'
import {useSelector} from "react-redux"
import { FlatList, ImageSourcePropType } from 'react-native';
import SongItem from './SongItem';
import {I_SongListProps, I_RenderItemProps} from "./interfaces"
import GenreCategories from './GenreCategories';
import { I_SongSchema } from '../../../controllers/music/interfaces';
import { RootStateOrAny } from 'react-redux';
import { isEmptyString } from '../../../util/util';

const SongList: React.FC<I_SongListProps> = (): JSX.Element => {

    const allSongs: I_SongSchema[] = useSelector((state: RootStateOrAny) => state.songs);

    const flatListRenderer = useCallback(({item, index}: I_RenderItemProps) => {
        const placeholderImage: ImageSourcePropType = require("./../../../assets/images/musical-note.jpg");
        return (
            <React.Fragment>
                {index === 0 && (
                    <GenreCategories />
                )}
                <SongItem id={item.id} title={item.title} author={item.author} cover={isEmptyString(item.cover) ? placeholderImage : item.cover} />
            </React.Fragment>
        )
    }, []);
    
    const keyExtractor = useCallback((item: I_SongSchema) => item.id, []);

    return (
        <React.Fragment>
            <FlatList
                data={allSongs}
                renderItem={flatListRenderer}
                keyExtractor={keyExtractor}
            />
        </React.Fragment>
    )
}



export default SongList;