import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface RouteProps {
    route: {name: string};
}

interface TabBarIconProps {
    focused: boolean;
    color: string;
}

interface ScreenOptionsProps {
    tabBarIcon: ({}: TabBarIconProps) => JSX.Element
}

type ScreenOptions = ({}: RouteProps) => ScreenOptionsProps

export const screenOptions: ScreenOptions = ({route}): ScreenOptionsProps => ({
    tabBarIcon: ({focused, color}) => {
        let iconName: string = "";
        if (route.name === 'Home') {
            iconName = focused ? 'alien-outline' : 'alien-outline';
        }else if (route.name === "Genres"){
            iconName = focused ? "cards" : "cards"
        }
        return <Icon name={iconName} size={33} color={color} />;
    }
})