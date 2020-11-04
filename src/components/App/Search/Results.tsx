import React from 'react'
import {StyleSheet, View, ActivityIndicator, ViewStyle} from "react-native"
import { SearchResultsProps, SearchResultsStyles } from './interfaces'   

const SearchResults: React.FC<SearchResultsProps> = ({searchTerm}):JSX.Element => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#1a1a1a" />
        </View>
    )
}

export default SearchResults

const styles = StyleSheet.create<SearchResultsStyles>({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
})