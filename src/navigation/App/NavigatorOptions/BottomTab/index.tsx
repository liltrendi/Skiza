interface TabBarOptionsProps {
    activeTintColor: string;
    inactiveTintColor: string;
    showLabel: boolean;
    keyboardHidesTabBar: boolean;
}

export const tabBarOptions: TabBarOptionsProps = {
    activeTintColor: 'red',
    inactiveTintColor: '#000',
    showLabel: false,
    keyboardHidesTabBar: true
};