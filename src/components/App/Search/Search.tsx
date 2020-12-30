import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import {useSelector} from "react-redux"
import { RootStateOrAny } from 'react-redux';
import { I_SongSchema } from '../../../controllers/music/interfaces';
import Bar from './Bar'
import SearchNotStarted from "./NotStarted"
import SearchResults from "./Results"
import { I_SearchProps, I_SearchStyles } from './interfaces'
import { filterMatchingSongsFromSearch } from '../../../controllers/music/search';

const Search: React.FC<I_SearchProps> = (): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const allSongs: I_SongSchema[] = useSelector((state: RootStateOrAny) => state.songs);

    const RenderSearch: React.FC<{}> = ():JSX.Element => {
        if(searchTerm.length < 1){
            return <SearchNotStarted />
        }

        const matchedSongs: I_SongSchema[] = filterMatchingSongsFromSearch(allSongs, searchTerm);
        
        return <SearchResults searchTerm={searchTerm} matchedSongs={matchedSongs} />
    }

    return (
        <React.Fragment>
            <Bar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RenderSearch />
        </React.Fragment>
    )
}

export default Search

const styles = StyleSheet.create<I_SearchStyles>({
    
})