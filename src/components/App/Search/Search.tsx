import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import {useSelector} from "react-redux"
import { RootStateOrAny } from 'react-redux';
import { ISongsSchema } from '../../../controllers/music/interfaces';
import Bar from './Bar'
import SearchNotStarted from "./NotStarted"
import SearchResults from "./Results"
import { SearchProps, SearchStyles } from './interfaces'
import { filterMatchingSongsFromSearch } from '../../../controllers/music/search';

const Search: React.FC<SearchProps> = (): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const allSongs: ISongsSchema[] = globalState.songs;

    const RenderSearch: React.FC<{}> = ():JSX.Element => {
        if(searchTerm.length < 1){
            return <SearchNotStarted />
        }

        const matchedSongs: ISongsSchema[] = filterMatchingSongsFromSearch(allSongs, searchTerm);
        
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