import React from 'react'
import { Text, View } from 'react-native'

interface SearchProps {}

const Search: React.FC<SearchProps> = (): JSX.Element => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Search</Text>
        </View>
    )
}

export default Search