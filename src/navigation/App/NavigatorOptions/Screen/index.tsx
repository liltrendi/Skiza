import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface I_RouteProps {
    route: { name: string };
}

interface I_TabBarIconProps {
    focused: boolean;
    color: string;
}

interface I_ScreenOptionsProps {
    tabBarIcon: ({ }: I_TabBarIconProps) => JSX.Element
}

type T_ScreenOptions = ({ }: I_RouteProps) => I_ScreenOptionsProps

export const screenOptions: T_ScreenOptions = ({ route }): I_ScreenOptionsProps => ({
    tabBarIcon: ({ focused, color }): JSX.Element => {
        let iconName: string = "";
        if (route.name === 'Home') {
            iconName = "music";
        } else if (route.name === "Search") {
            iconName = "magnify"
        } else if(route.name === "Settings"){
            iconName = "account-cog-outline"
        }
        return <Icon name={iconName} size={focused ? 33 : 30} color={color} />;
    }
})