interface I_TabBarOptionsProps {
    activeTintColor: string;
    inactiveTintColor: string;
    showLabel: boolean;
    keyboardHidesTabBar: boolean;
}

export const tabBarOptions: I_TabBarOptionsProps = {
    activeTintColor: 'red',
    inactiveTintColor: '#000',
    showLabel: false,
    keyboardHidesTabBar: false
};