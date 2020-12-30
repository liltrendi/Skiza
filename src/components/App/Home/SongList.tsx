import React, { useCallback } from 'react'
import {useSelector} from "react-redux"
import { FlatList } from 'react-native';
import SongItem from './SongItem';
import {ISongListProps, RenderItemProps} from "./interfaces"
import GenreCategories from './GenreCategories';
import { ISongSchema } from '../../../controllers/music/interfaces';
import { RootStateOrAny } from 'react-redux';
import { isEmptyString } from '../../../util/util';

const SongList: React.FC<ISongListProps> = (): JSX.Element => {

    const allSongs: ISongSchema[] = useSelector((state: RootStateOrAny) => state.songs);

    const flatListRenderer = useCallback(({item, index}: RenderItemProps) => {
        const placeholderImage: any = require("./../../../assets/images/musical-note.jpg");
        return (
            <React.Fragment>
                {index === 0 && (
                    <GenreCategories />
                )}
                <SongItem id={item.id} title={item.title} author={item.author} cover={isEmptyString(item.cover) ? placeholderImage : item.cover} />
            </React.Fragment>
        )
    }, []);
    
    const keyExtractor = useCallback((item: ISongSchema) => item.id, []);

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