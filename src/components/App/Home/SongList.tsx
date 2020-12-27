import React from 'react'
import {useSelector} from "react-redux"
import { FlatList } from 'react-native';
import SongItem from './SongItem';
import {ISongListProps, RenderItemProps} from "./interfaces"
import GenreCategories from './GenreCategories';
import { ISongsSchema } from '../../../controllers/music/interfaces';
import { RootStateOrAny } from 'react-redux';

const SongList: React.FC<ISongListProps> = (): JSX.Element => {

    const placeholderImage: any = require("./../../../assets/images/musical-note.jpg");
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const allSongs: ISongsSchema[] = globalState.songs;

    return (
        <React.Fragment>
            <FlatList
                data={allSongs}
                renderItem={({item, index}: RenderItemProps) => {
                    return (
                        <React.Fragment>
                            {index === 0 && (
                                <GenreCategories />
                            )}
                            <SongItem id={item.id} title={item.title} author={item.author} cover={item.cover ? item.cover : placeholderImage} isActive={item.isActive} />
                        </React.Fragment>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </React.Fragment>
    )
}

export default SongList;