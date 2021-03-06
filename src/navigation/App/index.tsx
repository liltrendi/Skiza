import React, {useEffect, useState} from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeStackScreens } from "./Home"
import { SearchStackScreens } from "./Search"
import { SettingsStackScreens } from "./Settings"
import { screenOptions } from "./NavigatorOptions/Screen"
import { tabBarOptions } from "./NavigatorOptions/BottomTab"
import PlayerFooter from "../Shared/PlayerFooter"
import { I_SongSchema } from "../../controllers/music/interfaces"
import PlayerModal from "../../components/App/Shared/PlayerModal"
import CreatePlaylist from "../../components/App/Home/Playlists/CreatePlaylist"
import RenamePlaylist from "../../components/App/Home/Playlists/Settings/RenamePlaylist"

type T_AppStackNavigatorParams = {
    Home: undefined;
    Search: undefined;
    Settings: undefined;
    CreatePlaylist: undefined;
    RenamePlaylist: undefined;
}

interface I_GlobalStateProps {
    currentSong: I_SongSchema | null;
    theme: string;
    showPlayerModal: boolean;
}

const AppStack = createBottomTabNavigator<T_AppStackNavigatorParams>();

export const AppStackScreens = (): JSX.Element => {

    const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);
    const globalState: RootStateOrAny = useSelector((state: RootStateOrAny) => state);
    const {currentSong, theme, showPlayerModal}: I_GlobalStateProps = globalState;

    useEffect(() => {
        setTimeout(() => setShowSplashScreen(false), 700);
    }, [])

    if(showSplashScreen){
        return <React.Fragment />
    }

    return (
        <React.Fragment>
            <AppStack.Navigator
                screenOptions={({route}) => screenOptions({theme, route})}
                tabBarOptions={tabBarOptions(globalState)}
            >
                <AppStack.Screen name={"Home"} component={HomeStackScreens} />
                <AppStack.Screen name={"Search"} component={SearchStackScreens} />
                <AppStack.Screen name={"Settings"} component={SettingsStackScreens} />
                <AppStack.Screen name={"CreatePlaylist"} component={CreatePlaylist} />
                <AppStack.Screen name={"RenamePlaylist"} component={RenamePlaylist} />
            </AppStack.Navigator>
            {showPlayerModal && <PlayerModal />}
            {currentSong && <PlayerFooter />}
        </React.Fragment>
    )
}