import React from 'react'
import { StackNavigationOptions } from '@react-navigation/stack';

export const settingsHeaderOptions: StackNavigationOptions = {
  title: 'Settings',
  headerTitleStyle: {
    fontFamily: "CircularStd-Book",
    fontWeight: 'bold',
    fontSize: 22,
    paddingBottom: 25
  },
  headerTitleAlign: 'left',
  headerLeftContainerStyle: {
    paddingLeft: 15,
  },
  headerRightContainerStyle: {
    paddingRight: 15,
    paddingBottom: 25
  },
  headerRight: (props) => (
    <React.Fragment />
  ),
  headerTransparent: true,
  headerStyle: {
    height: 80
  },
};