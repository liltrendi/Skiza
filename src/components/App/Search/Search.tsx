import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import {useSelector} from "react-redux"
import { RootStateOrAny } from 'react-redux';
import { ISongSchema } from '../../../controllers/music/interfaces';
import Bar from './Bar'
import SearchNotStarted from "./NotStarted"
import SearchResults from "./Results"
import { SearchProps, SearchStyles } from './interfaces'
import { filterMatchingSongsFromSearch } from '../../../controllers/music/search';

const Search: React.FC<SearchProps> = (): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const allSongs: ISongSchema[] = useSelector((state: RootStateOrAny) => state.songs);

    const RenderSearch: React.FC<{}> = ():JSX.Element => {
        if(searchTerm.length < 1){
            return <SearchNotStarted />
        }

        const matchedSongs: ISongSchema[] = filterMatchingSongsFromSearch(allSongs, searchTerm);
        
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

const styles = StyleSheet.create<SearchStyles>({
    
})