import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import Bar from './Bar'
import SearchNotStarted from "./NotStarted"
import SearchResults from "./Results"

interface SearchProps {}

interface Styles {
    
}

const Search: React.FC<SearchProps> = (): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    const RenderSearch: React.FC<{}> = ():JSX.Element => {
        if(searchTerm.length < 1){
            return <SearchNotStarted />
        }else{
            return <SearchResults searchTerm={searchTerm} />
        }
    }

    return (
        <React.Fragment>
            <Bar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RenderSearch />
        </React.Fragment>
    )
}

export default Search

const styles = StyleSheet.create<Styles>({
    
})