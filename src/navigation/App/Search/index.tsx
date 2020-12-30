import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {SearchScreen} from "./screens"
import {searchHeaderOptions} from "./options"

type T_SearchStackNavigatorParams = {
    Search: undefined;
}

const SearchStack = createStackNavigator<T_SearchStackNavigatorParams>()

interface I_SearchStackScreensProps {}

export const SearchStackScreens: React.FC<I_SearchStackScreensProps> = (): JSX.Element => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name={"Search"} component={SearchScreen} options={searchHeaderOptions} />
            {/* add more screens to home */}
        </SearchStack.Navigator>
    )
}