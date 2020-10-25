import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {LibraryScreen} from "./screens"
import {LibraryHeaderOptions} from "./options"

type LibraryStackNavigatorParams = {
    Library: undefined;
}

const LibraryStack = createStackNavigator<LibraryStackNavigatorParams>()

interface LibraryStackScreensProps {}

export const LibraryStackScreens: React.FC<LibraryStackScreensProps> = (): JSX.Element => {
    return (
        <LibraryStack.Navigator>
            <LibraryStack.Screen name={"Library"} component={LibraryScreen} options={LibraryHeaderOptions} />
            {/* add more screens to Library */}
        </LibraryStack.Navigator>
    )
}