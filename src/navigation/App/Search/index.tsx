import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {SearchScreen} from "./screens"
import {searchHeaderOptions} from "./options"

type SearchStackNavigatorParams = {
    Search: undefined;
}

const SearchStack = createStackNavigator<SearchStackNavigatorParams>()

interface SearchStackScreensProps {}

export const SearchStackScreens: React.FC<SearchStackScreensProps> = (): JSX.Element => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name={"Search"} component={SearchScreen} options={searchHeaderOptions} />
            {/* add more screens to home */}
        </SearchStack.Navigator>
    )
}