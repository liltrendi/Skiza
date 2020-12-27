import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import SongItem from './SongItem';
import {ISongListProps, RenderItemProps} from "./interfaces"
import GenreCategories from './GenreCategories';
import { ISongsSchema } from '../../../controllers/music/interfaces';
import {fetchSongsFromLocalStorage, defaultSongOptions} from "../../../controllers/music/getSongs"

const SongList: React.FC<ISongListProps> = (): JSX.Element => {
    const [fetchedMusic, setFetchedMusic] = useState<Array<ISongsSchema>>([])

    const placeholderImage: any = require("./../../../assets/images/musical-note.jpg");

    useEffect(() => {
        try {
            if(false){
                fetchSongsFromLocalStorage(defaultSongOptions)
                    .then((data: Array<ISongsSchema>) => {
                        setFetchedMusic(data);
                    })
                    .catch((e: Error) => {
                        setFetchedMusic([]);
                    })
            }
        }catch(e: any){
            console.log("Exception", e)
        }
    }, [])

    return (
        <React.Fragment>
            <FlatList
                data={fetchedMusic}
                renderItem={({item, index}: RenderItemProps) => {
                    return (
                        <React.Fragment>
                            {index === 0 && (
                                <GenreCategories />
                            )}
                            <SongItem id={item.id} title={item.title} author={item.author} cover={placeholderImage} isActive={item.isActive} />
                        </React.Fragment>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </React.Fragment>
    )
}

export default SongList;