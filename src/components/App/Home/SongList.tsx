import React from 'react'
import { FlatList } from 'react-native';
import SongItem from './SongItem';
import {SongSchema, SongListProps, RenderItemProps} from "./interfaces"
import GenreCategories from './GenreCategories';

const songData: SongSchema[] = ((): SongSchema[] => (new Array(109).fill(null)).map((_, index) => ({
    id: `${index+1}`,
    title: `Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1}`,
    artist: `Artist name ${index+1}`,
    isActive: index === 5
})))()

const SongList: React.FC<SongListProps> = (): JSX.Element => {

    const placeholderImage: any = require("./../../../assets/images/musical-note.jpg");

    return (
        <React.Fragment>
            <FlatList
                data={songData}
                renderItem={({item, index}: RenderItemProps) => {
                    return (
                        <React.Fragment>
                            {index === 0 && (
                                <GenreCategories />
                            )}
                            <SongItem id={item.id} title={item.title} artist={item.artist} cover={placeholderImage} isActive={item.isActive} />
                        </React.Fragment>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </React.Fragment>
    )
}

export default SongList;