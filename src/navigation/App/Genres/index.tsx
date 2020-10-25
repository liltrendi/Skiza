import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {GenresScreen} from "./screens"
import {GenresHeaderOptions} from "./options"

type GenresStackNavigatorParams = {
    Genres: undefined;
}

const GenresStack = createStackNavigator<GenresStackNavigatorParams>()

interface GenresStackScreensProps {}

export const GenresStackScreens: React.FC<GenresStackScreensProps> = (): JSX.Element => {
    return (
        <GenresStack.Navigator>
            <GenresStack.Screen name={"Genres"} component={GenresScreen} options={GenresHeaderOptions} />
            {/* add more screens to Genres */}
        </GenresStack.Navigator>
    )
}