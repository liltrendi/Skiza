import React from 'react'
import {StyleSheet, View, ActivityIndicator, ViewStyle} from "react-native"

interface SearchResultsProps {
    searchTerm: string;
}

interface Styles {
    container: ViewStyle;
}   

const SearchResults: React.FC<SearchResultsProps> = ({searchTerm}):JSX.Element => {
    return (
        <View style={styles.container}>
            <ActivityIndicator color="#1a1a1a" />
        </View>
    )
}

export default SearchResults

const styles = StyleSheet.create<Styles>({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
})