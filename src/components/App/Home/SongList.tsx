import React, { useEffect } from 'react'
import { FlatList } from 'react-native';
import SongItem from './SongItem';
import {SongSchema, SongListProps, RenderItemProps, LocalSongSchema} from "./interfaces"
import GenreCategories from './GenreCategories';
import { RNAndroidAudioStore } from 'react-native-get-music-files';

const songData: SongSchema[] = ((): SongSchema[] => (new Array(109).fill(null)).map((_, index) => ({
    id: `${index+1}`,
    title: `Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1}`,
    artist: `Artist name ${index+1}`,
    isActive: index === 5
})))()

const songOptions = {
    title: true,
    artist: true,
    album: true,
    duration: true,
    cover: false,
    blured: false
}

const SongList: React.FC<SongListProps> = (): JSX.Element => {

    const placeholderImage: any = require("./../../../assets/images/musical-note.jpg");

    async function getSongsFromLocalStorage(): Promise<Array<LocalSongSchema>>{
        let results: Promise<Array<LocalSongSchema>> = await RNAndroidAudioStore.getAll(songOptions);
        return results;
    }

    useEffect(() => {
        try {
            let allSongs: Promise<Array<LocalSongSchema>> = getSongsFromLocalStorage();
            allSongs
                .then((data: Array<LocalSongSchema>) => {
                    console.log("Data", data)
                    //set state
                })
                .catch(error => {
                    console.log("Error", error)
                })
        }catch(e: any){
            console.log("Exception", e)
        }
    }, [])

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