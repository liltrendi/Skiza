import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface RouteProps {
    route: { name: string };
}

interface TabBarIconProps {
    focused: boolean;
    color: string;
}

interface ScreenOptionsProps {
    tabBarIcon: ({ }: TabBarIconProps) => JSX.Element
}

type ScreenOptions = ({ }: RouteProps) => ScreenOptionsProps

export const screenOptions: ScreenOptions = ({ route }): ScreenOptionsProps => ({
    tabBarIcon: ({ focused, color }) => {
        let iconName: string = "";
        if (route.name === 'Home') {
            iconName = "music";
        } else if (route.name === "Search") {
            iconName = "magnify"
        } else if (route.name === "Library"){
            iconName = "folder-music-outline"
        } else if(route.name === "Settings"){
            iconName = "cog-outline"
        }
        return <Icon name={iconName} size={focused ? 33 : 30} color={color} />;
    }
})