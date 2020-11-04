import React from 'react'
import { FlatList } from 'react-native';
import SongItem from './SongItem';
import {SongSchema, SongListProps, RenderItemProps} from "./interfaces"

const songData: SongSchema[] = ((): SongSchema[] => (new Array(403).fill(null)).map((_, index) => ({
    id: `${index+1}`,
    title: `Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1} Title ${index+1}`,
    artist: `Artist name ${index+1}`
})))()

const SongList: React.FC<SongListProps> = (): JSX.Element => {

    const defaultImage: any = require("./../../../assets/images/onboarding.png")

    return (
        <FlatList
            data={songData}
            renderItem={({item}: RenderItemProps) => <SongItem id={item.id} title={item.title} artist={item.artist} cover={defaultImage} />}
            keyExtractor={item => item.id}
        />
    )
}

export default SongList;