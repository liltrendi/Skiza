import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface I_RouteProps {
    route: { name: string };
    theme: string;
} 

interface I_TabBarIconProps {
    focused: boolean;
    color: string;
}

interface I_ScreenOptionsProps {
    tabBarIcon: ({ }: I_TabBarIconProps) => JSX.Element;
    tabBarButton: (() => null) | undefined;
}

type T_ScreenOptions = ({ }: I_RouteProps) => I_ScreenOptionsProps

const routesToExclude: string[] = [
    "CreatePlaylist"
];

export const screenOptions: T_ScreenOptions = ({ route, theme }): I_ScreenOptionsProps => ({
    tabBarButton: routesToExclude.includes(route.name) ? () => null : undefined,
    tabBarIcon: ({ focused, color }): JSX.Element => {
        let iconName: string = "";
        if (route.name === 'Home') {
            iconName = "music";
        } else if (route.name === "Search") {
            iconName = "magnify"
        } else if(route.name === "Settings"){
            iconName = "account-cog-outline"
        } else {
            return <React.Fragment />
        }
        return <Icon name={iconName} size={focused ? 33 : 30} color={color} />;
    }
})