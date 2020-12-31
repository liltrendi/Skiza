import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import {useSelector, RootStateOrAny} from "react-redux"
import { I_SongSchema } from '../../../controllers/music/interfaces';
import Bar from './Bar'
import SearchNotStarted from "./NotStarted"
import SearchResults from "./Results"
import { I_SearchProps, I_SearchStyles } from './interfaces'
import { filterMatchingSongsFromSearch } from '../../../controllers/music/search';

interface I_GlobalStateProps {
    songs: I_SongSchema[];
}

const Search: React.FC<I_SearchProps> = (): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {songs: allSongs}: I_GlobalStateProps = globalState;

    const styles: I_SearchStyles = getStyles(globalState);

    const RenderSearchResults: React.FC<{}> = ():JSX.Element => {
        if(searchTerm.length < 1){
            return <SearchNotStarted />
        }

        const matchedSongs: I_SongSchema[] = filterMatchingSongsFromSearch(allSongs, searchTerm);
        
        return <SearchResults searchTerm={searchTerm} matchedSongs={matchedSongs} />
    }

    return (
        <React.Fragment>
            <Bar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RenderSearchResults />
        </React.Fragment>
    )
}

export default Search

const getStyles = (state: RootStateOrAny): I_SearchStyles => {
    return StyleSheet.create<I_SearchStyles>({
    
    })
}